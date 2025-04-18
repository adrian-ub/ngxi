import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGitForkLightIcon],svg[ph-git-fork-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 64a30 30 0 1 0-36 29.4V112a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V93.4a30 30 0 1 0-12 0V112a22 22 0 0 0 22 22h42v28.6a30 30 0 1 0 12 0V134h42a22 22 0 0 0 22-22V93.4A30.05 30.05 0 0 0 222 64M46 64a18 18 0 1 1 18 18a18 18 0 0 1-18-18m100 128a18 18 0 1 1-18-18a18 18 0 0 1 18 18m46-110a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitForkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
