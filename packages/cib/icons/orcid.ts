import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibOrcidIcon],svg[cib-orcid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0C7.161 0 0 7.161 0 16s7.161 16 16 16s16-7.161 16-16S24.839 0 16 0M9.823 5.839c.704 0 1.265.573 1.265 1.26s-.561 1.265-1.265 1.265a1.27 1.27 0 0 1-1.26-1.265c0-.697.563-1.26 1.26-1.26m-.959 4.046h1.923v13.391H8.864zm4.751 0h5.197c4.948 0 7.125 3.541 7.125 6.703c0 3.439-2.687 6.699-7.099 6.699h-5.224zm1.921 1.74v9.927h3.063c4.365 0 5.365-3.312 5.365-4.964c0-2.687-1.713-4.963-5.464-4.963z"></svg:path>`,
})
export class CibOrcidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
