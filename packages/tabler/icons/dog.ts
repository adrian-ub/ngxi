import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDogIcon],svg[tabler-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5h2m6 7q-1 8-5 8h-4q-4 0-5-8"></svg:path><svg:path d="M11 16q0 1 1 1c1 0 1-.333 1-1zm1 2v2m-2-9v.01m4-.01v.01M5 4l6 .97l-6.238 6.688a1.02 1.02 0 0 1-1.41.111a.95.95 0 0 1-.327-.954zm14 0l-6 .97l6.238 6.688c.358.408.989.458 1.41.111a.95.95 0 0 0 .327-.954z"></svg:path></svg:g>`,
})
export class TablerDogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
