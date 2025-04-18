import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSunIcon],svg[zmdi-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m123 95l-30 30l-39-38l30-30zM64 216v43H0v-43zM256 4v63h-43V4zm159 83l-38 38l-30-30l38-38zm-69 292l30-29l39 38l-30 30zm59-163h64v43h-64zM235 109q53 0 90.5 37.5T363 237t-37.5 90.5T235 365t-90.5-37.5T107 237t37.5-90.5T235 109m-22 362v-63h43v63zM54 388l39-39l30 30l-39 39z"></svg:path>`,
})
export class ZmdiSunIcon {
  readonly viewBox = input("0 0 472 472")
  readonly width = input("1em")
  readonly height = input("1em")
}
