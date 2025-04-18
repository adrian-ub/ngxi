import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilFaceGrinningCircleFilledIcon],svg[pepicons-pencil-face-grinning-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilFaceGrinningCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M12.75 20.5a7.75 7.75 0 1 0 0-15.5a7.75 7.75 0 0 0 0 15.5m0 1a8.75 8.75 0 1 0 0-17.5a8.75 8.75 0 0 0 0 17.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.856 14.692a.5.5 0 0 1 .394-.192h7.5a.5.5 0 0 1 .485.621L16.75 15l.485.121v.002l-.001.004l-.003.01l-.01.038l-.038.131a7.8 7.8 0 0 1-.829 1.834c-.623.996-1.692 2.11-3.354 2.11s-2.731-1.114-3.354-2.11a7.8 7.8 0 0 1-.867-1.965l-.01-.038l-.003-.01v-.004c0-.001-.001-.002.484-.123l-.485.122a.5.5 0 0 1 .09-.43m1.087.808c.124.318.305.716.551 1.11c.55.88 1.355 1.64 2.506 1.64s1.956-.76 2.506-1.64c.246-.394.427-.792.551-1.11z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilFaceGrinningCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilFaceGrinningCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
