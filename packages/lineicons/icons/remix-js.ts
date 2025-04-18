import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsRemixJsIcon],svg[lineicons-remix-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.932 17.424c.18 2.31.18 3.394.18 4.576h-5.35c0-.258.004-.493.009-.732c.014-.743.03-1.517-.09-3.081c-.16-2.29-1.147-2.799-2.961-2.799H3.305v-4.166h8.67c2.291 0 3.437-.696 3.437-2.54c0-1.623-1.146-2.605-3.437-2.605h-8.67V2h9.624c5.189 0 7.767 2.449 7.767 6.36c0 2.926-1.814 4.834-4.265 5.152c2.069.413 3.278 1.59 3.501 3.912" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.305 22v-3.106h5.657c.945 0 1.15.7 1.15 1.118V22z"></svg:path>`,
})
export class LineiconsRemixJsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
