import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsFlickrIcon],svg[ls-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 14h498c47 0 84 37 84 84v498c0 25-10 44-25 59c-14 14-36 25-59 25H84c-47 0-84-37-84-84V98c0-23 11-45 25-59c15-15 34-25 59-25m111 443c62 0 113-50 113-112s-51-113-113-113c-61 0-113 51-113 113s52 112 113 112m276 0c61 0 113-50 113-112s-52-113-113-113c-62 0-114 51-114 113s52 112 114 112"></svg:path>`,
})
export class LsFlickrIcon {
  readonly viewBox = input("0 0 666 680")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
