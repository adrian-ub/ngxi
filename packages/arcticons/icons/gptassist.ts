import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGptassistIcon],svg[arcticons-gptassist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.53 31.569V7.298c0-.993-.806-1.798-1.799-1.798H8.27c-.993 0-1.798.805-1.798 1.798v24.271c0 .993.805 1.798 1.798 1.798h3.933l3.932 9.133l3.933-9.133h19.664c.993 0 1.798-.805 1.798-1.798"></svg:path><svg:circle cx="17.258" cy="15.462" r="2.247" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.742" cy="15.462" r="2.247" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.99 22.464c0 1.868-1.714 3.594-4.495 4.528s-6.208.934-8.99 0s-4.494-2.66-4.494-4.528z"></svg:path>`,
})
export class ArcticonsGptassistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
