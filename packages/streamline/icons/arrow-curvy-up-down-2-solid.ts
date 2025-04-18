import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCurvyUpDown2SolidIcon],svg[streamline-arrow-curvy-up-down-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.808 1.515c-.797 0-1.443.646-1.443 1.443V8.57h1.25a.5.5 0 0 1 .354.854l-1.604 1.603v.015H3.35l-.381.382a.5.5 0 0 1-.708 0l-.38-.382h-.016v-.015L.261 9.424a.5.5 0 0 1 .354-.854h1.25V2.958a2.942 2.942 0 0 1 5.885 0v8.084a1.442 1.442 0 0 0 2.885 0V5.368h-1.25a.5.5 0 0 1-.354-.854l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.353.854h-1.25v5.674a2.942 2.942 0 1 1-5.885 0V2.958c0-.797-.646-1.443-1.442-1.443" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCurvyUpDown2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
