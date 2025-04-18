import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsBitbucketLightIcon],svg[skill-icons-bitbucket-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#skillIconsBitbucketLight1)"><svg:path fill="#F4F2ED" d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"></svg:path><svg:path fill="#2684FF" d="M46.292 52.03a5.7 5.7 0 0 0-2.357.48c-.74.328-1.4.81-1.93 1.415a5.4 5.4 0 0 0-1.14 2.082a5.4 5.4 0 0 0-.138 2.36l23.624 140.758a7.4 7.4 0 0 0 2.551 4.422a7.66 7.66 0 0 0 4.85 1.778h113.332a5.64 5.64 0 0 0 3.651-1.28a5.44 5.44 0 0 0 1.914-3.309l23.624-142.342a5.4 5.4 0 0 0-.138-2.36a5.4 5.4 0 0 0-1.141-2.081a5.6 5.6 0 0 0-1.929-1.414a5.7 5.7 0 0 0-2.358-.481zm99.475 101.731h-36.173L99.8 103.537h54.732z"></svg:path><svg:path fill="url(#skillIconsBitbucketLight0)" d="M206.616 103.467h-52.185l-8.758 50.184h-36.144l-42.677 49.72a7.62 7.62 0 0 0 4.865 1.801h113.27a5.63 5.63 0 0 0 3.648-1.279a5.43 5.43 0 0 0 1.912-3.306z"></svg:path></svg:g><svg:defs><svg:lineargradient id="skillIconsBitbucketLight0" x1="39228.9" x2="23538.7" y1="3347.5" y2="23660.6" gradientUnits="userSpaceOnUse"><svg:stop offset=".18" stop-color="#0052CC"></svg:stop><svg:stop offset="1" stop-color="#2684FF"></svg:stop></svg:lineargradient><svg:clippath id="skillIconsBitbucketLight1"><svg:path fill="#fff" d="M0 0h256v256H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsBitbucketLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
