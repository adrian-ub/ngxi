import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonAwsConsoleIcon],svg[arcticons-amazon-aws-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535c3.63.086 7.194-.993 10.167-3.08m-5.926-11.93l-2.025 6.504l-2.024-6.504l-2.025 6.504l-2.024-6.504m9.985 5.955c.448.376.931.549 2.018.549h.55c.896 0 1.622-.728 1.622-1.626h0c0-.898-.726-1.626-1.622-1.626h-1.1a1.624 1.624 0 0 1-1.623-1.626h0c0-.898.726-1.626 1.622-1.626h.55c1.087 0 1.57.173 2.019.55m-16.147 3.5a2.454 2.454 0 0 1-2.454 2.454h0a2.454 2.454 0 0 1-2.454-2.454v-1.596a2.454 2.454 0 0 1 2.454-2.454h0a2.454 2.454 0 0 1 2.454 2.454m0 4.05v-6.504"></svg:path>`,
})
export class ArcticonsAmazonAwsConsoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
