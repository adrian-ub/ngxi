import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIcons1dot1dot1dot1Icon],svg[simple-icons-1dot1dot1dot1-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.389 0A5.377 5.377 0 0 0 0 5.389V18.61A5.377 5.377 0 0 0 5.389 24H18.61A5.377 5.377 0 0 0 24 18.611V5.39A5.377 5.377 0 0 0 18.611 0Zm11.546 4.595h.942v3.122h.69v.868h-.69v1.201h-1.001V8.585H14.68v-.964zm-6.07.589h2.523v14.842h-3.094V9.79H6.68V7.805q1.425-.063 1.997-.184q.91-.195 1.48-.779q.39-.399.592-1.064q.116-.4.116-.594m5.989.73L15.513 7.72h1.365V5.915Z"></svg:path>`,
})
export class SimpleIcons1dot1dot1dot1Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
