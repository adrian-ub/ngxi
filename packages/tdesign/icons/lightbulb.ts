import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLightbulbIcon],svg[tdesign-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-3.418-.002-6.2 2.782-6.2 6.2c0 .917.169 1.61.632 2.723c.16.385.405.91.696 1.533q.213.456.452.975A48 48 0 0 1 8.69 16h6.629c.341-.853.741-1.749 1.114-2.565l.39-.85c.312-.677.576-1.25.745-1.66c.46-1.114.632-1.81.632-2.725c0-3.417-2.782-6.198-6.2-6.2M3.8 8.2C3.8 3.679 7.477-.002 12 0s8.2 3.678 8.2 8.2c0 1.264-.262 2.227-.783 3.489c-.186.45-.477 1.08-.797 1.777q-.181.391-.368.8c-.467 1.023-.953 2.121-1.31 3.083l-.243.651h-9.41l-.235-.666c-.339-.955-.82-2.046-1.29-3.067l-.423-.91a50 50 0 0 1-.756-1.665C4.058 10.425 3.8 9.462 3.8 8.2M7.5 19h9v2h-9zm2 3h5v2h-5z"></svg:path>`,
})
export class TdesignLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
