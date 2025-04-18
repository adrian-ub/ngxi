import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBowlFillIcon],svg[ri-bowl-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5a1 1 0 0 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02C5.506 3.079 5 3.583 5 4.5v1a1 1 0 0 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02C7.494 3.921 8 3.417 8 2.5zM2 9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1c0 4.1-2.468 7.625-6 9.168V20a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.832A10 10 0 0 1 2 10zM18 .5a1 1 0 0 1 1 1v1c0 .916-.506 1.42-.773 1.687l-.02.02c-.212.212-.21.231-.208.275L18 4.5v1a1 1 0 1 1-2 0v-1c0-.916.506-1.42.773-1.687l.02-.02c.212-.212.21-.231.208-.275L17 2.5v-1a1 1 0 0 1 1-1m-4.5 1a1 1 0 1 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02c-.267.266-.773.77-.773 1.687v1a1 1 0 1 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02c.267-.266.773-.77.773-1.687z"></svg:path>`,
})
export class RiBowlFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
