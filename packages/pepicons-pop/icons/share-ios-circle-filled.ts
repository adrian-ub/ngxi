import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopShareIosCircleFilledIcon],svg[pepicons-pop-share-ios-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopShareIosCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M12 6a1 1 0 0 1 2 0v10.5a1 1 0 1 1-2 0z"></svg:path><svg:path d="M13.64 5.768a1 1 0 1 0-1.28-1.536l-3 2.5a1 1 0 0 0 1.28 1.536z"></svg:path><svg:path d="M12.36 5.768a1 1 0 1 1 1.28-1.536l3 2.5a1 1 0 1 1-1.28 1.536zM16 12a1 1 0 1 1 0-2h1c1.623 0 3 1.165 3 2.692v7.616C20 21.835 18.623 23 17 23H9c-1.623 0-3-1.165-3-2.692v-7.616C6 11.165 7.377 10 9 10h1a1 1 0 0 1 0 2H9c-.586 0-1 .35-1 .692v7.616c0 .342.414.692 1 .692h8c.586 0 1-.35 1-.692v-7.616c0-.342-.414-.692-1-.692z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopShareIosCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopShareIosCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
