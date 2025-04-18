import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCenterFocusWeakIcon],svg[zmdi-center-focus-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 256v85h85v43H43q-18 0-30.5-12.5T0 341v-85zm0-213v85H0V43q0-18 12.5-30.5T43 0h85v43zM341 0q18 0 30.5 12.5T384 43v85h-43V43h-85V0zm0 341v-85h43v85q0 18-12.5 30.5T341 384h-85v-43zM192 107q35 0 60 25t25 60t-25 60t-60 25t-60-25t-25-60t25-60t60-25m0 128q18 0 30.5-12.5T235 192t-12.5-30.5T192 149t-30.5 12.5T149 192t12.5 30.5T192 235"></svg:path>`,
})
export class ZmdiCenterFocusWeakIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
