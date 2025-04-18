import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCakeThreeIcon],svg[icon-park-twotone-cake-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCakeThree0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M39 34V16a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2"></svg:path><svg:path d="M6 36h36M6 42h36M9 21h6v5h6v-5h6v8h6v-8h6M9 23v-4m30 4v-4m-6-5V8m-9 6V4m-9 10V8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCakeThree0)"></svg:path>`,
})
export class IconParkTwotoneCakeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
