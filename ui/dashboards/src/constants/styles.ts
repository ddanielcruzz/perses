// Copyright 2024 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { SxProps, Theme } from '@mui/material';

export const editButtonStyle: SxProps<Theme> = {
  whiteSpace: 'nowrap',
  minWidth: 'auto',
  '& .MuiButton-startIcon': {
    marginRight: 0.5,
  },
};

export const MIN_VARIABLE_WIDTH = 120;
export const MAX_VARIABLE_WIDTH = 500;

export const HEADER_SMALL_WIDTH = 170;
export const HEADER_MEDIUM_WIDTH = 220;
export const HEADER_ACTIONS_CONTAINER_NAME = 'header-actions-container';
