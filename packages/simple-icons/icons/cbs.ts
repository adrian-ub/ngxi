import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCbsIcon],svg[simple-icons-cbs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 24C5.314 24 .068 18.587.068 11.949C.068 5.413 5.314 0 12 0s11.932 5.413 11.932 11.949C23.932 18.587 18.686 24 12 24m0-5.106c5.452 0 9.36-3.473 11.109-6.945C21.875 9.294 18.172 5.106 12 5.106c-5.452 0-9.36 3.37-11.109 6.843C2.537 15.42 6.548 18.894 12 18.894m0-.613c-3.497 0-6.377-2.86-6.377-6.332S8.503 5.617 12 5.617s6.377 2.86 6.377 6.332c0 3.574-2.88 6.332-6.377 6.332"></svg:path>`,
})
export class SimpleIconsCbsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
