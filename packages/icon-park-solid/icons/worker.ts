import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWorkerIcon],svg[icon-park-solid-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWorker0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M32 16a8 8 0 1 1-16 0"></svg:path><svg:path fill="#fff" stroke="#fff" d="M24 8a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8"></svg:path><svg:path stroke="#fff" d="M12 16h24M24 4v4"></svg:path><svg:path fill="#fff" stroke="#fff" d="M24 27c-9.389 0-17 7.163-17 16h34c0-8.837-7.611-16-17-16"></svg:path><svg:path stroke="#000" d="M18 34v4m12-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWorker0)"></svg:path>`,
})
export class IconParkSolidWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
