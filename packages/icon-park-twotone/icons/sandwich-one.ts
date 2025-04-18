import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSandwichOneIcon],svg[icon-park-twotone-sandwich-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSandwichOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17.799 40.142s4.16 4.16 8.652 2.995s15.805-12.478 16.97-16.97c1.165-4.493-2.995-8.652-2.995-8.652M7.9 30.243s-4.16-4.16-2.995-8.652c1.164-4.492 12.478-15.806 16.97-16.97c4.492-1.165 8.652 2.994 8.652 2.994"></svg:path><svg:rect width="40" height="14" x="5.071" y="33.071" fill="#555" rx="7" transform="rotate(-45 5.071 33.071)"></svg:rect><svg:path d="m15.678 33.779l.563-1.689a6 6 0 0 1 3.326-3.615l.42-.18a4.98 4.98 0 0 0 2.762-3.002v0a4.98 4.98 0 0 1 2.762-3.002l.95-.407a4.7 4.7 0 0 0 2.614-2.84v0a4.71 4.71 0 0 1 2.98-2.981l2.008-.67"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSandwichOne0)"></svg:path>`,
})
export class IconParkTwotoneSandwichOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
