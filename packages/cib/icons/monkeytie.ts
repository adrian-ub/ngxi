import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibMonkeytieIcon],svg[cib-monkeytie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.667 0H5.334A5.33 5.33 0 0 0 .001 5.333v21.333a5.33 5.33 0 0 0 5.333 5.333h21.333A5.33 5.33 0 0 0 32 26.666V5.333A5.33 5.33 0 0 0 26.667 0M16.448 21.729l-1.156-9.016l-3.437 6.188l-3.443-6.167l-1.147 8.995H4.693L6.557 8.281h2.016l3.276 6.12l3.276-6.12h2.015l1.865 13.448zm8.703-7.65h-2.115v4.343c0 1.459.12 1.537 1.464 1.537h.651l-.224 1.959h-1.724c-1.807 0-2.572-1.267-2.572-2.516v-5.333H19.26l.209-1.959h1.135v-2.104l2.391-.251v2.365h2.115v1.959zm2.234 7.838h-1.973l.208-1.98h1.984l-.229 1.975z"></svg:path>`,
})
export class CibMonkeytieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
