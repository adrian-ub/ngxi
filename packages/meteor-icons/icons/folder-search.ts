import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFolderSearchIcon],svg[meteor-icons-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="15.5" cy="14.5" r="3.5"></svg:circle><svg:path d="m18 17l5 5m-1-8V8a2 2 0 0 0-2-2h-9L9 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11"></svg:path></svg:g>`,
})
export class MeteorIconsFolderSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
