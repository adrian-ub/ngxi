import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsHotIcon],svg[ls-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M630 379c0-125-65-190-190-190c125 0 190-64 190-189c0 125 64 189 189 189c-125 0-189 65-189 190M345 58c0 227 119 346 346 346c-227 0-346 119-346 346c0-227-118-346-345-346c227 0 345-119 345-346m250 478c0 59 31 91 90 91h1c-60 0-91 31-91 90c0-59-31-90-90-90c59 0 90-32 90-91"></svg:path>`,
})
export class LsHotIcon {
  readonly viewBox = input("0 0 819 750")
  readonly width = input("1.1em")
  readonly height = input("1em")
}
