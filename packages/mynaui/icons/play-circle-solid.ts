import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPlayCircleSolidIcon],svg[mynaui-play-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m10.305-2.691l.048.03c.183.11.366.228.532.344c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.735l-.04.033c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.003-.046A14 14 0 0 1 9.75 12c0-.254.01-.531.026-.807l.003-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465"></svg:path>`,
})
export class MynauiPlayCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
