import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elTasksIcon],svg[el-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 131.213v234.375h1200V131.213zm752.856 58.009h385.62v118.359h-385.62zM0 482.849v234.375h1200V482.85zm487.72 58.008h650.757v118.358H487.72zM0 834.412v234.375h1200V834.412zm894.946 58.008h243.529v118.359H894.946z"></svg:path>`,
})
export class ElTasksIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
