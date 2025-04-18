import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleRightLightIcon],svg[lets-icons-circle-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m10 11l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M19.794 12.75c1.017-.88 1.407-1.907 1.108-2.912c-.3-1.006-1.27-1.931-2.756-2.625s-3.396-1.117-5.423-1.198c-2.026-.082-4.048.182-5.737.748c-1.688.566-2.943 1.402-3.56 2.37c-.618.969-.562 2.013.16 2.964c.721.95 2.065 1.75 3.812 2.27s3.795.729 5.81.592"></svg:path></svg:g>`,
})
export class LetsIconsCircleRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
