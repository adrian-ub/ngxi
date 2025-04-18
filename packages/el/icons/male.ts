import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elMaleIcon],svg[el-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M727.498 0v167.082h182.347L669.487 405.84c-67.443-43.645-147.834-68.973-234.15-68.973c-238.345 0-431.585 193.202-431.585 431.547C3.751 1006.76 196.992 1200 435.337 1200s431.548-193.24 431.548-431.586c0-90.596-27.903-174.67-75.601-244.09l236.321-236.321V468.75h167.082c0-146.475 1.587-322.656 1.561-468.75zM435.337 510.575c142.412 0 257.839 115.427 257.839 257.839s-115.427 257.878-257.839 257.878s-257.878-115.466-257.878-257.878s115.465-257.839 257.878-257.839"></svg:path>`,
})
export class ElMaleIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
