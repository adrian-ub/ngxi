import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWatchOneIcon],svg[icon-park-solid-watch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWatchOne0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M19 14V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8m0 20v8a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8"></svg:path><svg:circle cx="24" cy="24" r="11" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 25h4m0-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWatchOne0)"></svg:path>`,
})
export class IconParkSolidWatchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
