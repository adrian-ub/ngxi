import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHillClimb2Icon],svg[arcticons-hill-climb-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="21.861" cy="34.799" r="5.373"></svg:circle><svg:circle cx="36.042" cy="20.618" r="5.373"></svg:circle><svg:path d="m25.66 31l6.582-6.582m-14.181 14.18l-.981.982l-8.271-5.625L5.5 20.287L16.567 9.22l12.717 4.259l5.652-5.651l2.989 1.757L42.5 14.16l-2.659 2.659m-10.557-3.34L8.809 33.955M5.5 20.287l7.097 9.88"></svg:path><svg:circle cx="21.861" cy="34.799" r="1.492"></svg:circle><svg:circle cx="36.042" cy="20.618" r="1.492"></svg:circle></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.2 34.822a2.653 2.653 0 0 1 3.176-2.6c1.111.214 1.999 1.175 2.11 2.302c.082.837-.183 1.664-.762 2.172c-1.072.94-4.524 3.476-4.524 3.476h5.3"></svg:path>`,
})
export class ArcticonsHillClimb2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
