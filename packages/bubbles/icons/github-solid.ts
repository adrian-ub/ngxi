import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesGithubSolidIcon],svg[bubbles-github-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c-4.394 0-8 3.606-8 8c0 3.75 2.631 7.156 6.125 8v-2.647a1.96 1.96 0 0 1-1.017-.025c-.473-.14-.857-.455-1.142-.935c-.182-.307-.504-.64-.84-.615l-.083-.934c.727-.062 1.356.443 1.729 1.07c.166.279.356.442.601.514c.237.07.491.037.787-.068c.075-.593.346-.815.551-1.127c-2.083-.312-2.914-1.417-3.243-2.29c-.437-1.158-.203-2.606.57-3.52c.015-.018.042-.065.031-.097c-.354-1.07.078-1.955.094-2.049c.408.121.475-.121 1.775.669l.225.135c.094.056.064.024.158.017A6.8 6.8 0 0 1 10 5.86a6.8 6.8 0 0 1 1.702.243l.073.007c-.007-.001.02-.005.063-.03c1.625-.985 1.566-.663 2.002-.805c.015.094.441.994.09 2.05c-.046.145 1.409 1.478.602 3.617c-.33.873-1.16 1.979-3.243 2.29c.267.407.588.623.586 1.463V18C15.369 17.156 18 13.75 18 10c0-4.394-3.606-8-8-8"></svg:path>`,
})
export class BubblesGithubSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
