import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGameController02Icon],svg[hugeicons-game-controller-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M8.164 17.858c-1.273 2.209-2.958 3.489-4.317 3.06c-1.861-.59-2.407-4.163-1.218-7.984s3.662-6.44 5.524-5.851c1.15.363 1.203 1.779 2.15 2.295c.224.122.537.122 1.165.122h1.064c.627 0 .941 0 1.165-.122c.947-.516 1-1.932 2.15-2.295c1.862-.589 4.335 2.031 5.524 5.851s.643 7.395-1.218 7.983c-1.36.43-3.044-.85-4.317-3.059M11.104 16h1.792M12 3v6"></svg:path></svg:g>`,
})
export class HugeiconsGameController02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
