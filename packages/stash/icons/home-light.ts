import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashHomeLightIcon],svg[stash-home-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4.367l9.307 7.238a.5.5 0 0 1-.614.79l-1.193-.928V20a.5.5 0 1 1-1 0v-9.311L12 5.633L5.5 10.69V20a.5.5 0 0 1-1 0v-8.533l-1.193.928a.5.5 0 1 1-.614-.79L4.5 10.2V7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.367zM6.5 8.55V7.5h-1v1.8z"></svg:path><svg:path fill="currentColor" d="M10.5 14.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 1-1 0v-5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 15v5a.5.5 0 1 1-1 0v-5a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class StashHomeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
