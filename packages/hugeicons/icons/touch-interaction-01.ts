import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchInteraction01Icon],svg[hugeicons-touch-interaction-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 7.997h-.824c-1.497 0-2.246 0-2.71-.44C3 7.12 3 6.413 3 5s0-2.12.465-2.558c.465-.439 1.214-.439 2.711-.439h11.647c1.498 0 2.247 0 2.712.439S21 3.586 21 4.999s0 2.12-.465 2.559s-1.214.439-2.712.439H16.5"></svg:path><svg:path d="M18.03 21.992c-.05-1.714.09-1.94.221-2.32c.132-.382.947-1.735 1.273-2.718c1.052-3.178.247-3.715-1.014-4.68c-1.444-1.107-3.89-1.67-5.415-1.548v-4.09c0-.863-.826-1.614-1.752-1.614s-1.746.751-1.746 1.614v7.752L7.626 12.71c-.532-.537-1.383-.488-2-.081a1.27 1.27 0 0 0-.445.511c-.28.589-.2 1.255.242 1.8l1.12 1.445m2.985 5.613v-.946c.073-1.163-.983-2.096-2.106-3.535m0 0c-.081-.104.076.097 0 0m0 0c-.34-.43-.61-.808-.878-1.132m.878 1.132l1.107 1.354m-1.107-1.354l-.878-1.132"></svg:path></svg:g>`,
})
export class HugeiconsTouchInteraction01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
