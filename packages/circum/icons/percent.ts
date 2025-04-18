import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumPercentIcon],svg[circum-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.934A9.934 9.934 0 1 1 21.933 12A9.945 9.945 0 0 1 12 21.934m0-18.868A8.934 8.934 0 1 0 20.933 12A8.944 8.944 0 0 0 12 3.066"></svg:path><svg:path fill="currentColor" d="M9 10.258a1.5 1.5 0 1 1 1.061-.439A1.5 1.5 0 0 1 9 10.258m0-2a.5.5 0 1 0 .353.146A.5.5 0 0 0 9 8.259Zm-1.242 8.485a.5.5 0 0 1-.358-.853l8.489-8.49a.5.5 0 0 1 .707.707L8.111 16.6a.5.5 0 0 1-.353.143M15 16.742a1.5 1.5 0 1 1 1.061-.438a1.5 1.5 0 0 1-1.061.438m0-2a.5.5 0 0 0-.354.147a.5.5 0 0 0-.146.352a.5.5 0 1 0 1 0a.5.5 0 0 0-.5-.5Z"></svg:path>`,
})
export class CircumPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
