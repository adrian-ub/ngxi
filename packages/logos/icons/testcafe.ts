import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTestcafeIcon],svg[logos-testcafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#404142" d="m158.898 109.302l-8.826 9.107h35.312l35.311 31.882H35.312l35.311-31.882h26.485l-8.839-9.107H61.797L0 163.954h256l-61.79-54.652z"></svg:path><svg:path fill="#37B5E5" d="M237.425 22.079L215.462 0l-92.223 92.757l-35.128-35.339l-21.956 22.086l57.09 57.418l114.18-114.836z"></svg:path>`,
})
export class LogosTestcafeIcon {
  readonly viewBox = input("0 0 256 164")
  readonly width = input("1.57em")
  readonly height = input("1em")
}
