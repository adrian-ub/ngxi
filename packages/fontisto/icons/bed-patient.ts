import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoBedPatientIcon],svg[fontisto-bed-patient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.102 11.147v1.731H1.904V6.672H0v12.414h1.904v-2.837h20.198v3.074H24v-8.178z"></svg:path><svg:path fill="currentColor" d="M8.709 11.165c0 .564-.457 1.022-1.022 1.022H3.793a1.02 1.02 0 0 1-1.022-1.022v-.002c0-.564.457-1.022 1.022-1.022h3.894c.564 0 1.022.457 1.022 1.022zm11.034-4.001h-2.37V4.8h-1.68v2.365h-2.365v1.68h2.364v2.365h1.68V8.845h2.37z"></svg:path>`,
})
export class FontistoBedPatientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
