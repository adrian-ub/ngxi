import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMapsSearchIcon],svg[hugeicons-maps-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12.089V9.236c0-1.944 0-2.916-.586-3.52S19.886 5.112 18 5.112h-2.079c-.917 0-.925-.002-1.75-.416l-3.331-1.67c-1.391-.698-2.087-1.047-2.828-1.023S6.6 2.421 5.253 3.208l-1.227.719c-.989.578-1.483.867-1.754 1.348C2 5.756 2 6.342 2 7.513v8.236c0 1.539 0 2.309.342 2.737c.228.285.547.476.9.54c.53.095 1.18-.284 2.478-1.044c.882-.516 1.73-1.052 2.785-.907c.884.122 1.705.681 2.495 1.077M8 2.002v15.034m7-12.027v6.013"></svg:path><svg:path d="m20.107 20.175l1.845 1.823m-.783-4.36a3.56 3.56 0 1 1-7.121.001a3.56 3.56 0 0 1 7.121 0"></svg:path></svg:g>`,
})
export class HugeiconsMapsSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
