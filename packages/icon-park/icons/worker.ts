import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWorkerIcon],svg[icon-park-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 8C19.5817 8 16 11.5817 16 16H32C32 11.5817 28.4183 8 24 8Z"></svg:path><svg:path stroke="#000" d="M12 16H36"></svg:path><svg:path stroke="#000" d="M24 4V8"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 27C14.6112 27 7 34.1634 7 43H41C41 34.1634 33.3888 27 24 27Z"></svg:path><svg:path stroke="#fff" d="M18 34V38"></svg:path><svg:path stroke="#fff" d="M30 34V38"></svg:path></svg:g>`,
})
export class IconParkWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
