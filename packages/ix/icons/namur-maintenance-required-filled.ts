import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNamurMaintenanceRequiredFilledIcon],svg[ix-namur-maintenance-required-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 32l224 224l-224 224L32 256zm-21.333 160c-31.36 0-31.988 20.489-32 21.308v.025H224l-.001 21.333H128v64h32v-21.333h-10.667V256l21.333-.001V320h128v-32L384 224l-85.333 21.333v-10.666l-53.334-.001v-21.333h21.334v-.025c-.013-.82-.64-21.308-32-21.308M384 245.333a118.4 118.4 0 0 0-17.707 35.627c0 9.78 7.928 17.707 17.707 17.707s17.707-7.928 17.707-17.707A118.4 118.4 0 0 0 384 245.333"></svg:path>`,
})
export class IxNamurMaintenanceRequiredFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
