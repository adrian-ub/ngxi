import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psWomanIcon],svg[ps-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 64q0 26-19 45t-45 19t-45-19t-19-45t19-45t45-19t45 19t19 45M64 256v235q0 9 6 15t15 6q10 0 16-6t6-15v-43h42v43q0 9 6 15t16 6q9 0 15-6t6-15V192q0-17-12.5-30T149 149h-42q-18 0-30.5 13T64 192zM43 149q-18 0-30.5 13T0 192v149q17 0 30-12.5T43 299zm213 43q0-17-12.5-30T213 149v150q0 17 13 29.5t30 12.5z"></svg:path>`,
})
export class PsWomanIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
