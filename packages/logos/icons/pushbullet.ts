import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPushbulletIcon],svg[logos-pushbullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosPushbullet0" x1="8.59%" x2="77.471%" y1="1.954%" y2="73.896%"><svg:stop offset="0%" stop-color="#4CB36B"></svg:stop><svg:stop offset="100%" stop-color="#3EA16F"></svg:stop></svg:lineargradient><svg:path id="logosPushbullet1" d="M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128S57.308 0 128 0s128 57.308 128 128"></svg:path></svg:defs><svg:mask id="logosPushbullet2" fill="#fff"><svg:use href="#logosPushbullet1"></svg:use></svg:mask><svg:use fill="#67BF79" href="#logosPushbullet1"></svg:use><svg:path fill="#67BF79" d="M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128S57.308 0 128 0s128 57.308 128 128" mask="url(#logosPushbullet2)"></svg:path><svg:path fill="url(#logosPushbullet0)" d="M63.111 187.022L96.178 72l64.533 60.978L200 90.133l87.533 86.289l-110.844 124.889z" mask="url(#logosPushbullet2)"></svg:path><svg:path fill="#FFF" d="M77 189.6c-16.733 0-16.733 0-16.733-16.733V81c0-16.733 0-16.733 16.733-16.733h3.334c16.733 0 16.733 0 16.733 16.733v91.867c0 16.733 0 16.733-16.733 16.733zm44.041 0c-5.699 0-8.508-2.809-8.508-8.508V72.774c0-5.698 2.809-8.507 8.508-8.507h37.537c32.178 0 52.628 32.273 52.628 63.025S190.578 189.6 158.578 189.6z" mask="url(#logosPushbullet2)"></svg:path>`,
})
export class LogosPushbulletIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
