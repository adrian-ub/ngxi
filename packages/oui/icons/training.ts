import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTrainingIcon],svg[oui-training-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.386 9.836a2.5 2.5 0 1 1 3.611.667C15.212 11.173 16 12.46 16 14v1.5a.5.5 0 1 1-1 0V14c0-1.724-1.276-3-3-3c-.91 0-1.298-.02-1.805-.122c-1.25-.254-2.333-1-3.585-2.566a.5.5 0 1 1 .78-.624c.9 1.124 1.653 1.74 2.434 2.043c.155.052.345.083.562.105m1.785.128q.125.015.251.034L12.5 10a1.5 1.5 0 1 0-.33-.036M9.78 11.97a.5.5 0 0 1 .5.5a1 1 0 0 1-.05.231c-.179.38-.23.774-.23 1.302v1.5a.5.5 0 1 1-1 0v-1.5c0-.657.072-1.186.307-1.696a.5.5 0 0 1 .473-.337M5.958 5.772a.5.5 0 0 1-.78.625L3.11 3.812a.5.5 0 1 1 .78-.624zM1 11h5.5a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5V.5A.5.5 0 0 1 .5 0h12a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V1H1z"></svg:path>`,
})
export class OuiTrainingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
