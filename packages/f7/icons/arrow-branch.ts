import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowBranchIcon],svg[f7-arrow-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.875 18.438l2.156-2.813c5.672 3.633 11.907 11.79 11.907 17.414v13.453c0 1.617.726 2.485 2.062 2.485c1.313 0 2.04-.868 2.04-2.485V33.04c0-5.555 6.116-13.617 11.812-17.344l1.992 2.72c.984 1.358 2.18 1.054 2.672-.47l2.953-8.625c.422-1.265-.258-2.156-1.547-2.133l-9.14.141c-1.571.024-2.227 1.055-1.266 2.39l1.898 2.602c-5.508 3.867-10.687 10.758-11.39 14.297h-.07c-.704-3.562-5.86-10.43-11.368-14.297l1.828-2.39c1.031-1.313.398-2.367-1.172-2.438l-9.14-.398c-1.29-.07-1.993.797-1.618 2.086l2.72 8.695c.468 1.547 1.64 1.898 2.671.563"></svg:path>`,
})
export class F7ArrowBranchIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
