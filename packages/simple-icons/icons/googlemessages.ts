import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGooglemessagesIcon],svg[simple-icons-googlemessages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0M4.911 7.089h11.456a2.197 2.197 0 0 1 2.165 2.19v5.863a2.213 2.213 0 0 1-2.177 2.178H8.04c-1.174 0-2.04-.99-2.04-2.178v-4.639L4.503 7.905c-.31-.42-.05-.816.408-.816m3.415 2.19c-.347 0-.68.21-.68.544s.333.544.68.544h7.905c.346 0 .68-.21.68-.544s-.334-.545-.68-.545zm0 2.177c-.347 0-.68.21-.68.544s.333.544.68.544h7.905c.346 0 .68-.21.68-.544s-.334-.544-.68-.544zm-.013 2.19c-.346 0-.68.21-.68.544s.334.544.68.544h5.728c.347 0 .68-.21.68-.544s-.333-.545-.68-.545z"></svg:path>`,
})
export class SimpleIconsGooglemessagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
