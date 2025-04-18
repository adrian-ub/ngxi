import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTwoFingerDragHotizontalSolidIcon],svg[streamline-two-finger-drag-hotizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.691.038A.5.5 0 0 1 3 .5v1h1a.5.5 0 0 1 0 1H3v1a.5.5 0 0 1-.854.354l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .545-.108m9.662.108A.5.5 0 0 0 11.5.5v1h-1a.5.5 0 1 0 0 1h1v1a.5.5 0 0 0 .853.354l1.5-1.5a.5.5 0 0 0 0-.708zM5.42 10.062L3.524 6.11a1.307 1.307 0 0 1 2.332-1.177l1.587 2.992v-.008l-.876-4.625a1.283 1.283 0 0 1 2.52-.478l.815 4.294l.447-.147a2.134 2.134 0 0 1 2.545 1.014c.119.221.17.471.211.719l.698 4.14A1 1 0 0 1 12.817 14H5.983a1 1 0 0 1-.605-.204l-.74-.564a1.707 1.707 0 0 1 .208-2.853z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTwoFingerDragHotizontalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
