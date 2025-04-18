import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCrownCircleFilledIcon],svg[pepicons-pop-crown-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCrownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m18.267 12.928l-.367.234a3 3 0 0 1-4.107-.867L13 11.105l-.793 1.19a3 3 0 0 1-4.107.867l-.367-.234L8.542 16h8.916zM6.654 9.87c-.768-.488-1.736.219-1.504 1.099l1.654 6.286A1 1 0 0 0 7.77 18h10.458a1 1 0 0 0 .967-.745l1.654-6.286c.232-.88-.736-1.587-1.504-1.099l-2.52 1.604a1 1 0 0 1-1.369-.289l-1.625-2.437a1 1 0 0 0-1.664 0l-1.625 2.437a1 1 0 0 1-1.369.29z" clip-rule="evenodd"></svg:path><svg:path d="M14 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-16 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M7.5 19.25a1 1 0 0 1 1-1h9.251a1 1 0 1 1 0 2H8.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCrownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCrownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
