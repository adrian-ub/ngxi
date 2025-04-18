import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdGitCommitIcon],svg[ion-md-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 224h-99.8c-14.2-55.2-64.2-96-123.7-96S147 168.8 132.8 224H32v64h100.8c14.2 55.2 64.2 96 123.7 96s109.5-40.8 123.7-96H480v-64zM256.5 336c-44 0-79.8-35.9-79.8-80s35.8-80 79.8-80 79.8 35.9 79.8 80-35.8 80-79.8 80z" fill="currentColor"></svg:path>`,
})
export class IonMdGitCommitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
