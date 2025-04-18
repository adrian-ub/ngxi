import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPuppetIconIcon],svg[logos-puppet-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFAE1A" d="M256 256V138.204h-90.155l-48.049-48.307V0H0v117.796h90.155l48.307 48.307v62.256l-48.307 48.307H0v117.796h117.796v-89.897l48.307-48.307H256zM39.265 39.265h39.266v39.266H39.265zm39.266 315.673H39.265v-39.265h39.266z"></svg:path>`,
})
export class LogosPuppetIconIcon {
  readonly viewBox = input("0 0 256 395")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
