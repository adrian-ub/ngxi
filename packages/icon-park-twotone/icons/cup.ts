import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCupIcon],svg[icon-park-twotone-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCup0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path d="M8.778 17.012c0-.559.453-1.012 1.012-1.012h23.976c.559 0 1.012.453 1.012 1.012V31c0 7.18-5.82 13-13 13s-13-5.82-13-13z"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M8.778 23h26v8h-26z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.778 4v6m-8-4v2m16-2v2"></svg:path><svg:path stroke-linecap="round" d="M34.778 34a7 7 0 1 0 0-14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h49v48H0z" mask="url(#ipTCup0)"></svg:path>`,
})
export class IconParkTwotoneCupIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
