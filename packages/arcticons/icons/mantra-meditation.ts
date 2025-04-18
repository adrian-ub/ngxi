import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMantraMeditationIcon],svg[arcticons-mantra-meditation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="15.053" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.776 42.276a3.224 3.224 0 1 1 6.448 0a3.224 3.224 0 0 1-6.448 0"></svg:path><svg:circle cx="24" cy="5.724" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.006" cy="40.885" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.994" cy="7.115" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="11.077" cy="36.923" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.923" cy="11.077" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="7.115" cy="30.994" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="40.885" cy="17.006" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.724 20.776a3.224 3.224 0 1 1 0 6.448a3.224 3.224 0 0 1 0-6.448m36.552 0a3.224 3.224 0 1 1 0 6.448a3.224 3.224 0 0 1 0-6.448"></svg:path><svg:circle cx="7.115" cy="17.006" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="40.885" cy="30.994" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="11.077" cy="11.077" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.923" cy="36.923" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.006" cy="7.115" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.994" cy="40.885" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="5.724" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="42.276" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.776 9.294v15.823a3.224 3.224 0 0 0 6.448 0V9.293"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.224 31.564c0 3.928-3.224 7.489-3.224 7.489s-3.224-3.855-3.224-7.49a3.224 3.224 0 0 1 6.448 0"></svg:path>`,
})
export class ArcticonsMantraMeditationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
