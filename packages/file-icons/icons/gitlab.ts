import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsGitlabIcon],svg[file-icons-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 491.816l94.272-290.14H161.734zM29.606 201.676l-28.65 88.17a19.52 19.52 0 0 0 7.093 21.822L256 491.816zm0 0H161.73L104.946 26.927c-2.92-8.991-15.64-8.991-18.56 0zm452.787 0l28.651 88.17a19.52 19.52 0 0 1-7.093 21.822l-247.95 180.148zm.001 0H350.271l56.783-174.749c2.922-8.991 15.642-8.991 18.562 0z"></svg:path>`,
})
export class FileIconsGitlabIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
