import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonHeadphoneThinIcon],svg[iconamoon-headphone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" d="M21 15v-3a9 9 0 1 0-18 0v3"></svg:path><svg:path fill="currentColor" d="M3 15v-.5h-.5v.5zm0 .5h3v-1H3zm3.5.5v3h1v-3zm-3 3v-4h-1v4zM5 20.5A1.5 1.5 0 0 1 3.5 19h-1A2.5 2.5 0 0 0 5 21.5zM6.5 19A1.5 1.5 0 0 1 5 20.5v1A2.5 2.5 0 0 0 7.5 19zM6 15.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 6 14.5zm15-.5h.5v-.5H21zm-3 .5h3v-1h-3zm2.5-.5v4h1v-4zm-3 4v-3h-1v3zm1.5 1.5a1.5 1.5 0 0 1-1.5-1.5h-1a2.5 2.5 0 0 0 2.5 2.5zm1.5-1.5a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM18 14.5a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5z"></svg:path></svg:g>`,
})
export class IconamoonHeadphoneThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
