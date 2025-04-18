import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFolderopenIcon],svg[whh-folderopen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M630 192q-23 0-44 12.5T558 235l-46 85H56q-16 0-23 .5t-16.5 3t-13 9.5T0 352v32v-256l49-85q7-18 28-30.5T122 0h240q23 0 44 12.5T434 43l46 85h480q26 0 45 18.5t19 45.5zM64 384h512l32-96q7-18 19-25t35-7h266q51 0 64 32l32 96v256q0 53-37.5 90.5T896 768H128q-53 0-90.5-37.5T0 640V448q0-27 18.5-45.5T64 384"></svg:path>`,
})
export class WhhFolderopenIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
