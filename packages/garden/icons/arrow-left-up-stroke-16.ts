import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowLeftUpStroke16Icon],svg[garden-arrow-left-up-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.854 10.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-4-4l-.037-.042l-.042-.062l-.03-.06l-.02-.062l-.012-.054l-.003-.031L0 6.489q0-.03.005-.063L0 6.5l.003-.053l.014-.075l.02-.063l.052-.093l.046-.057l4.011-4.013a.5.5 0 0 1 .765.638l-.057.07L1.707 6H8.5a7.5 7.5 0 0 1 7.5 7.5a.5.5 0 1 1-1 0a6.5 6.5 0 0 0-6.267-6.496L8.5 7H1.707z"></svg:path>`,
})
export class GardenArrowLeftUpStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
