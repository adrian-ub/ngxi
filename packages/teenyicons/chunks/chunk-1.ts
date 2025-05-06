import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGbcOutlineIcon],svg[teenyicons-gbc-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2.5V2a.5.5 0 0 0-.5.5zm6 0h.5a.5.5 0 0 0-.5-.5zm-6 4H4a.5.5 0 0 0 .5.5zM3.5 1h8V0h-8zm8.5.5v10h1v-10zM9.5 14h-6v1h6zM3 13.5v-12H2v12zm.5.5a.5.5 0 0 1-.5-.5H2A1.5 1.5 0 0 0 3.5 15zm8.5-2.5A2.5 2.5 0 0 1 9.5 14v1a3.5 3.5 0 0 0 3.5-3.5zM11.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 11.5 0zm-8-1A1.5 1.5 0 0 0 2 1.5h1a.5.5 0 0 1 .5-.5zm1 3h6V2h-6zm5.5-.5v3h1v-3zM9.5 6h-5v1h5zM5 6.5v-4H4v4zm5-1a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 11 5.5zM5 8v3h1V8zm-1 2h3V9H4zm6-1h1V8h-1zm-1 2h1v-1H9z"></svg:path>`,
})
export class TeenyiconsGbcOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGbcSolidIcon],svg[teenyicons-gbc-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6V3h5v2.5a.5.5 0 0 1-.5.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5A1.5 1.5 0 0 1 3.5 0h8A1.5 1.5 0 0 1 13 1.5v10A3.5 3.5 0 0 1 9.5 15h-6A1.5 1.5 0 0 1 2 13.5zm2.5.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5A1.5 1.5 0 0 0 11 5.5v-3a.5.5 0 0 0-.5-.5zM5 8v1H4v1h1v1h1v-1h1V9H6V8zm5 0v1h1V8zm-1 3v-1h1v1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGbcSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGhostOutlineIcon],svg[teenyicons-ghost-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.914 14.086l.354.353zM4 14l-.354-.354zm2.5 0l.354-.354zm.146.146l-.353.354zm1.708 0L8 13.793zM8.5 14l.354.354zm2.5 0l-.354.354zm.086.086l-.354.353zM5 6h1V5H5zm4 0h1V5H9zm1.1 1.7a3.25 3.25 0 0 1-5.2 0l-.8.6c1.7 2.267 5.1 2.267 6.8 0zm-5.832 6.74l.086-.086l-.708-.708l-.085.086zm.94-.44h.085v-1h-.086zm.938.354l.147.146l.707-.707l-.146-.147zm2.561.146l.147-.146l-.708-.708l-.146.147zm1-.5h.086v-1h-.086zm.94.354l.085.085l.707-.707l-.085-.086zm1.439.646A1.914 1.914 0 0 0 14 13.086h-1c0 .505-.41.914-.914.914zm-1.354-.56c.36.358.846.56 1.354.56v-1a.9.9 0 0 1-.647-.268zm-.94-.44c.321 0 .628.127.854.354l.708-.708A2.2 2.2 0 0 0 9.793 13zm-.938.354c.226-.227.533-.354.853-.354v-1c-.585 0-1.147.232-1.56.646zM7.5 15c.453 0 .887-.18 1.207-.5L8 13.793a.7.7 0 0 1-.5.207zm-1.207-.5c.32.32.754.5 1.207.5v-1a.7.7 0 0 1-.5-.207zm-1-.5c.32 0 .627.127.853.354l.708-.708A2.2 2.2 0 0 0 5.293 13zm-.94.354c.227-.227.534-.354.854-.354v-1c-.585 0-1.147.232-1.56.646zM2.915 15c.508 0 .995-.202 1.354-.56l-.707-.708a.9.9 0 0 1-.647.268zM1 13.086C1 14.143 1.857 15 2.914 15v-1A.914.914 0 0 1 2 13.086zM7.5 1A5.5 5.5 0 0 1 13 6.5h1A6.5 6.5 0 0 0 7.5 0zM2 6.5A5.5 5.5 0 0 1 7.5 1V0A6.5 6.5 0 0 0 1 6.5zm-1 0v6.586h1V6.5zm13 6.586V6.5h-1v6.586z"></svg:path>`,
})
export class TeenyiconsGhostOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGhostSolidIcon],svg[teenyicons-ghost-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 6.5a6.5 6.5 0 0 1 13 0v6.586a1.914 1.914 0 0 1-3.268 1.353l-.086-.085A1.2 1.2 0 0 0 9.793 14h-.086c-.32 0-.627.127-.853.354l-.147.146a1.707 1.707 0 0 1-2.414 0l-.147-.146A1.2 1.2 0 0 0 5.293 14h-.086c-.32 0-.627.127-.853.354l-.086.085A1.914 1.914 0 0 1 1 13.086zM5 6h1V5H5zm4 0h1V5H9zM4.9 7.7a3.25 3.25 0 0 0 5.2 0l.8.6c-1.7 2.267-5.1 2.267-6.8 0z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGhostSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGifOutlineIcon],svg[teenyicons-gif-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 10.5H2v.5h.5zm2 0v.5H5v-.5zm9-7h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zM2 6v4.5h1V6zm.5 5h2v-1h-2zm2.5-.5v-2H4v2zM3 7h2V6H3zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM6 7h3V6H6zm0 4h3v-1H6zm1-4.5v4h1v-4zm3.5.5H13V6h-2.5zM10 6v5h1V6zm.5 3H12V8h-1.5z"></svg:path>`,
})
export class TeenyiconsGifOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGifSolidIcon],svg[teenyicons-gif-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM2 11V6h3v1H3v3h1V8.5h1V11zm6-4h1V6H6v1h1v3H6v1h3v-1H8zm5-1v1h-2v1h1v1h-1v2h-1V6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGifSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGiftOutlineIcon],svg[teenyicons-gift-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 7.5h-12m12 0a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1m12 0v5a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-5m6-3v-1m0 1H4.214A1.714 1.714 0 0 1 2.5 2.786V2.5a2 2 0 0 1 2-2a3 3 0 0 1 3 3m0 1h3.286c.947 0 1.714-.768 1.714-1.714V2.5a2 2 0 0 0-2-2a3 3 0 0 0-3 3m0 1v10"></svg:path>`,
})
export class TeenyiconsGiftOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGiftSolidIcon],svg[teenyicons-gift-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 0A2.5 2.5 0 0 0 2 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 0 0 0 5.5v1A1.5 1.5 0 0 0 1.5 8H7V4h1v4h5.5A1.5 1.5 0 0 0 15 6.5v-1A1.5 1.5 0 0 0 13.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0 0 10.5 0c-1.273 0-2.388.68-3 1.696A3.5 3.5 0 0 0 4.5 0M8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5zM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 0 1 4.5 1A2.5 2.5 0 0 1 7 3.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 9H1v3.5A2.5 2.5 0 0 0 3.5 15H7zm1 6h3.5a2.5 2.5 0 0 0 2.5-2.5V9H8z"></svg:path>`,
})
export class TeenyiconsGiftSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitBranchOutlineIcon],svg[teenyicons-git-branch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 4.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 0v6m2 2a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h5a3 3 0 0 0 3-3v-2m0 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></svg:path>`,
})
export class TeenyiconsGitBranchOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitBranchSolidIcon],svg[teenyicons-git-branch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 2 4.95v5.1A2.5 2.5 0 1 0 4.95 13H9.5A3.5 3.5 0 0 0 13 9.5V7.95a2.5 2.5 0 1 0-1 0V9.5A2.5 2.5 0 0 1 9.5 12H4.95A2.5 2.5 0 0 0 3 10.05v-5.1A2.5 2.5 0 0 0 2.5 0"></svg:path>`,
})
export class TeenyiconsGitBranchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitCommitOutlineIcon],svg[teenyicons-git-commit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 10.5a3 3 0 0 1 0-6m0 6a3 3 0 0 0 0-6m0 6V15m0-10.5V0"></svg:path>`,
})
export class TeenyiconsGitCommitOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitCommitSolidIcon],svg[teenyicons-git-commit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7.5a3.5 3.5 0 0 1 3-3.465V0h1v4.035a3.5 3.5 0 0 1 0 6.93V15H7v-4.035A3.5 3.5 0 0 1 4 7.5"></svg:path>`,
})
export class TeenyiconsGitCommitSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitCompareOutlineIcon],svg[teenyicons-git-compare-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8.5.5l-2 2m0 0l2 2m-2-2h3a3 3 0 0 1 3 3v5m-10-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 0v5a3 3 0 0 0 3 3H8m-1.5 2l2-2l-2-2m6 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></svg:path>`,
})
export class TeenyiconsGitCompareOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitCompareSolidIcon],svg[teenyicons-git-compare-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 2 4.95V9.5A3.5 3.5 0 0 0 5.5 13h1.793l-1.147 1.146l.708.708L9.207 12.5l-2.353-2.354l-.708.708L7.293 12H5.5A2.5 2.5 0 0 1 3 9.5V4.95A2.5 2.5 0 0 0 2.5 0m6.354.854L8.146.146L5.793 2.5l2.353 2.354l.708-.708L7.707 3H9.5A2.5 2.5 0 0 1 12 5.5v4.55a2.5 2.5 0 1 0 1 0V5.5A3.5 3.5 0 0 0 9.5 2H7.707z"></svg:path>`,
})
export class TeenyiconsGitCompareSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitForkOutlineIcon],svg[teenyicons-git-fork-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 4.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 0v6m0 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm10-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 0v1a3 3 0 0 1-3 3h-7"></svg:path>`,
})
export class TeenyiconsGitForkOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitForkSolidIcon],svg[teenyicons-git-fork-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 2 4.95v5.1a2.5 2.5 0 1 0 1 0V9h6.5A3.5 3.5 0 0 0 13 5.5v-.55a2.5 2.5 0 1 0-1 0v.55A2.5 2.5 0 0 1 9.5 8H3V4.95A2.5 2.5 0 0 0 2.5 0"></svg:path>`,
})
export class TeenyiconsGitForkSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitMergeOutlineIcon],svg[teenyicons-git-merge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 10.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm0 0v-6m2-2a2 2 0 1 0-2 2m2-2a2 2 0 0 1-2 2m2-2h5a3 3 0 0 1 3 3v2m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></svg:path>`,
})
export class TeenyiconsGitMergeOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitMergeSolidIcon],svg[teenyicons-git-merge-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 2 4.95v5.1a2.5 2.5 0 1 0 1 0v-5.1A2.5 2.5 0 0 0 4.95 3H9.5A2.5 2.5 0 0 1 12 5.5v1.55a2.5 2.5 0 1 0 1 0V5.5A3.5 3.5 0 0 0 9.5 2H4.95A2.5 2.5 0 0 0 2.5 0"></svg:path>`,
})
export class TeenyiconsGitMergeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitOutlineIcon],svg[teenyicons-git-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.793 1.207l.353.354zM1.207 6.793l-.353-.354zm0 1.414l.354-.353zm5.586 5.586l-.354.353zm1.414 0l-.353-.354zm5.586-5.586l.353.354zm0-1.414l-.354.353zM8.207 1.207l.354-.353zM6.44.854L.854 6.439l.707.707l5.585-5.585zM.854 8.56l5.585 5.585l.707-.707l-5.585-5.585zm7.707 5.585l5.585-5.585l-.707-.707l-5.585 5.585zm5.585-7.707L8.561.854l-.707.707l5.585 5.585zm0 2.122a1.5 1.5 0 0 0 0-2.122l-.707.707a.5.5 0 0 1 0 .708zM6.44 14.146a1.5 1.5 0 0 0 2.122 0l-.707-.707a.5.5 0 0 1-.708 0zM.854 6.44a1.5 1.5 0 0 0 0 2.122l.707-.707a.5.5 0 0 1 0-.708zm6.292-4.878a.5.5 0 0 1 .708 0L8.56.854a1.5 1.5 0 0 0-2.122 0zm-2 1.293l1 1l.708-.708l-1-1zM7.5 5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 4.5zM7.5 4a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 3zm0-1A1.5 1.5 0 0 0 6 4.5h1a.5.5 0 0 1 .5-.5zm.646 2.854l1.5 1.5l.707-.708l-1.5-1.5zM10.5 8a.5.5 0 0 1-.5-.5H9A1.5 1.5 0 0 0 10.5 9zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 12 7.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 10.5 6zm0-1A1.5 1.5 0 0 0 9 7.5h1a.5.5 0 0 1 .5-.5zM7 5.5v4h1v-4zm.5 5.5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 12zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 10.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 9zm0-1A1.5 1.5 0 0 0 6 10.5h1a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class TeenyiconsGitOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitPullOutlineIcon],svg[teenyicons-git-pull-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8.5.5l-2 2m0 0l2 2m-2-2h3a3 3 0 0 1 3 3v2m-10 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm0 0v-6m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></svg:path>`,
})
export class TeenyiconsGitPullOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitPullSolidIcon],svg[teenyicons-git-pull-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 2 4.95v5.1a2.5 2.5 0 1 0 1 0v-5.1A2.5 2.5 0 0 0 2.5 0m6.354.854L8.146.146L5.793 2.5l2.353 2.354l.708-.708L7.707 3H9.5A2.5 2.5 0 0 1 12 5.5v1.55a2.5 2.5 0 1 0 1 0V5.5A3.5 3.5 0 0 0 9.5 2H7.707z"></svg:path>`,
})
export class TeenyiconsGitPullSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitSolidIcon],svg[teenyicons-git-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.44.854a1.5 1.5 0 0 1 2.12 0l5.586 5.585a1.5 1.5 0 0 1 0 2.122l-5.585 5.585a1.5 1.5 0 0 1-2.122 0L.854 8.561a1.5 1.5 0 0 1 0-2.122L4.793 2.5l1.353 1.353A1.5 1.5 0 0 0 7 5.914v3.171a1.5 1.5 0 1 0 1 0v-3.17q.076-.027.147-.061l1 1a1.5 1.5 0 1 0 .707-.707l-1-1a1.5 1.5 0 0 0-2-2L5.5 1.792z"></svg:path>`,
})
export class TeenyiconsGitSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGithubOutlineIcon],svg[teenyicons-github-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.65 12.477a.5.5 0 1 0-.3-.954zm-3.648-2.96l-.484-.128l-.254.968l.484.127zM9 14.5v.5h1v-.5zm.063-4.812l-.054-.498a.5.5 0 0 0-.299.852zM12.5 5.912h.5v-.001zm-.833-2.006l-.466-.18a.5.5 0 0 0 .112.533zm-.05-2.017l.456-.204a.5.5 0 0 0-.319-.276zm-2.173.792l-.126.484a.5.5 0 0 0 .398-.064zm-3.888 0l-.272.42a.5.5 0 0 0 .398.064zM3.383 1.89l-.137-.48a.5.5 0 0 0-.32.276zm-.05 2.017l.354.353a.5.5 0 0 0 .112-.534zM2.5 5.93H3v-.002zm3.438 3.758l.352.355a.5.5 0 0 0-.293-.851zM5.5 11H6l-.001-.037zM5 14.5v.5h1v-.5zm.35-2.977c-.603.19-.986.169-1.24.085c-.251-.083-.444-.25-.629-.49a5 5 0 0 1-.27-.402c-.085-.139-.182-.302-.28-.447c-.191-.281-.473-.633-.929-.753l-.254.968c.08.02.184.095.355.346c.082.122.16.252.258.412c.094.152.202.32.327.484c.253.33.598.663 1.11.832c.51.168 1.116.15 1.852-.081zm4.65-.585c0-.318-.014-.608-.104-.878c-.096-.288-.262-.51-.481-.727l-.705.71c.155.153.208.245.237.333c.035.105.053.254.053.562zm-.884-.753c.903-.097 1.888-.325 2.647-.982c.78-.675 1.237-1.729 1.237-3.29h-1c0 1.359-.39 2.1-.892 2.534c-.524.454-1.258.653-2.099.743zM13 5.91a3.35 3.35 0 0 0-.98-2.358l-.707.706c.438.44.685 1.034.687 1.655zm-.867-1.824c.15-.384.22-.794.21-1.207l-1 .025a2.1 2.1 0 0 1-.142.82zm.21-1.207a3.1 3.1 0 0 0-.27-1.195l-.913.408c.115.256.177.532.184.812zm-.726-.99c.137-.481.137-.482.136-.482h-.003l-.004-.002l-.03-.007l-.054-.01a1 1 0 0 0-.158-.013a2.2 2.2 0 0 0-.51.053c-.425.091-1.024.317-1.82.832l.542.84c.719-.464 1.206-.634 1.488-.694a1.2 1.2 0 0 1 .273-.032l.033.002l-.008-.001l-.01-.002l-.006-.002h-.003l-.002-.001c-.001 0-.002 0 .136-.482m-2.047.307a8.2 8.2 0 0 0-4.14 0l.252.968a7.2 7.2 0 0 1 3.636 0zm-3.743.064C5.03 1.746 4.43 1.52 4.005 1.43a2.2 2.2 0 0 0-.51-.053a1.3 1.3 0 0 0-.241.03l-.004.002h-.003l.136.481l.137.481h-.001l-.002.001l-.003.001l-.016.004l-.008.001h.008l.025-.002a1.2 1.2 0 0 1 .273.032c.282.06.769.23 1.488.694zm-2.9-.576a3.1 3.1 0 0 0-.27 1.195l1 .025a2.1 2.1 0 0 1 .183-.812zm-.27 1.195c-.01.413.06.823.21 1.207l.932-.362a2.1 2.1 0 0 1-.143-.82zm.322.673a3.4 3.4 0 0 0-.726 1.091l.924.38c.118-.285.292-.545.51-.765zm-.726 1.091A3.4 3.4 0 0 0 2 5.93l1-.003c0-.31.06-.616.177-.902zM2 5.93c0 1.553.458 2.597 1.239 3.268c.757.65 1.74.88 2.64.987l.118-.993C5.15 9.09 4.416 8.89 3.89 8.438C3.388 8.007 3 7.276 3 5.928zm3.585 3.404c-.5.498-.629 1.09-.584 1.704L6 10.963c-.03-.408.052-.683.291-.921zM5 11v3.5h1V11zm5 3.5V13H9v1.5zm0-1.5v-2.062H9V13z"></svg:path>`,
})
export class TeenyiconsGithubOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGithubSolidIcon],svg[teenyicons-github-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.358 2.145a8.2 8.2 0 0 0-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.2 2.2 0 0 0-.51-.053a1.3 1.3 0 0 0-.232.028l-.01.002l-.004.002h-.003l.137.481l-.137-.48a.5.5 0 0 0-.32.276a3.12 3.12 0 0 0-.159 2.101A3.35 3.35 0 0 0 2 5.93c0 1.553.458 2.597 1.239 3.268c.547.47 1.211.72 1.877.863a2.3 2.3 0 0 0-.116.958v.598c-.407.085-.689.058-.89-.008c-.251-.083-.444-.25-.629-.49a5 5 0 0 1-.27-.402l-.057-.093a9 9 0 0 0-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127l-.254.968l.484.127c.08.02.184.095.355.346a7 7 0 0 1 .19.302l.068.11c.094.152.202.32.327.484c.253.33.598.663 1.11.832c.35.116.748.144 1.202.074V14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.562c0-.316-.014-.605-.103-.874c.663-.14 1.322-.39 1.866-.86c.78-.676 1.237-1.73 1.237-3.292v-.001a3.35 3.35 0 0 0-.768-2.125a3.12 3.12 0 0 0-.159-2.1a.5.5 0 0 0-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001l-.004-.002l-.009-.002l-.075-.015a1 1 0 0 0-.158-.013a2.2 2.2 0 0 0-.51.053c-.391.084-.93.283-1.636.716"></svg:path>`,
})
export class TeenyiconsGithubSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitlabOutlineIcon],svg[teenyicons-gitlab-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m.5 8.5l7 6l7-6l-2-8l-2 6h-6l-2-6z"></svg:path>`,
})
export class TeenyiconsGitlabOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitlabSolidIcon],svg[teenyicons-gitlab-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.974.342a.5.5 0 0 0-.96.037l-2 8a.5.5 0 0 0 .16.5l7 6a.5.5 0 0 0 .651 0l7-6a.5.5 0 0 0 .16-.5l-2-8a.5.5 0 0 0-.96-.037L10.14 6H4.86z"></svg:path>`,
})
export class TeenyiconsGitlabSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGlobeAfricaOutlineIcon],svg[teenyicons-globe-africa-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1H8a.5.5 0 0 0-.276-.447zm0 1l.224.447A.5.5 0 0 0 8 2zm-1 .5l-.224-.447a.5.5 0 0 0-.053.863zm1.5 1l-.277.416A.5.5 0 0 0 8 4zm.5 0V4a.5.5 0 0 0 .5-.5zm0-1V2a.5.5 0 0 0-.5.5zm1.5 0h.5A.5.5 0 0 0 10 2zm0 1h-.5a.5.5 0 0 0 .146.354zm.5.5h.5a.5.5 0 0 0-.146-.354zm0 1l.354.354A.5.5 0 0 0 11 5zm-.5.5V6a.5.5 0 0 0 .354-.146zm-1 0l-.224.447A.5.5 0 0 0 9 6zm-2-1l.224-.447a.5.5 0 0 0-.448 0zM6 5v.5a.5.5 0 0 0 .224-.053zM4.5 5v-.5a.5.5 0 0 0-.485.379zM4 7l-.485-.121a.5.5 0 0 0 .131.475zm1.5 1.5l-.354.354a.5.5 0 0 0 .13.093zm1 .5H7a.5.5 0 0 0-.276-.447zm0 1.5H6a.5.5 0 0 0 .146.354zm.5.5h.5a.5.5 0 0 0-.146-.354zm0 1h-.5a.5.5 0 0 0 .053.224zm.5 1l-.447.224a.5.5 0 0 0 .447.276zm1 0v.5a.5.5 0 0 0 .416-.223zm1-1.5l.416.277l.031-.053zm.5-1l.447.224a.5.5 0 0 0 .053-.224zm0-1l-.4-.3a.5.5 0 0 0-.1.3zm1.5-2l.4.3a.5.5 0 0 0 .047-.524zm-.5-1V6a.5.5 0 0 0-.447.724zm1.5 0V7a.5.5 0 0 0 .5-.5zm0-1V5a.5.5 0 0 0-.5.5zm-5 8.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM6.276.947l1 .5l.448-.894l-1-.5zM7 1v1h1V1zm.276.553l-1 .5l.448.894l1-.5zM6.223 2.916l1.5 1l.554-.832l-1.5-1zM8 4h.5V3H8zm1-.5v-1H8v1zM8.5 3H10V2H8.5zm1-.5v1h1v-1zm.146 1.354l.5.5l.708-.708l-.5-.5zM10 4v1h1V4zm.146.646l-.5.5l.708.708l.5-.5zM10 5H9v1h1zm-.776.053l-2-1l-.448.894l2 1zm-2.448-1l-1 .5l.448.894l1-.5zM6 4.5H4.5v1H6zm-1.985.379l-.5 2l.97.242l.5-2zm-.369 2.475l1.5 1.5l.708-.708l-1.5-1.5zm1.63 1.593l1 .5l.448-.894l-1-.5zM6 9v1.5h1V9zm.146 1.854l.5.5l.708-.708l-.5-.5zM6.5 11v1h1v-1zm.053 1.224l.5 1l.894-.448l-.5-1zM7.5 13.5h1v-1h-1zm1.416-.223l1-1.5l-.832-.554l-1 1.5zm1.031-1.553l.5-1l-.894-.448l-.5 1zM10.5 10.5v-1h-1v1zm-.1-.7l1.5-2l-.8-.6l-1.5 2zm1.547-2.524l-.5-1l-.894.448l.5 1zM11 7h1.5V6H11zm2-.5v-1h-1v1zm-.5-.5h2V5h-2z"></svg:path>`,
})
export class TeenyiconsGlobeAfricaOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGlobeAfricaSolidIcon],svg[teenyicons-globe-africa-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m1 0a6.5 6.5 0 0 1 5.527-6.428L7 1.31v.382l-.724.362a.5.5 0 0 0-.053.863l1.5 1A.5.5 0 0 0 8 4h.5a.5.5 0 0 0 .5-.5V3h.5v.5a.5.5 0 0 0 .146.354l.354.353v.586L9.793 5h-.675l-1.894-.947a.5.5 0 0 0-.448 0l-.894.447H4.5a.5.5 0 0 0-.485.379l-.5 2a.5.5 0 0 0 .131.475l1.5 1.5a.5.5 0 0 0 .13.093L6 9.31v1.19a.5.5 0 0 0 .146.354l.354.353V12a.5.5 0 0 0 .053.224l.5 1a.5.5 0 0 0 .447.276h1a.5.5 0 0 0 .416-.223l1-1.5l.031-.053l.5-1a.5.5 0 0 0 .053-.224v-.833L11.9 7.8a.5.5 0 0 0 .047-.524L11.81 7h.691a.5.5 0 0 0 .5-.5V6h.826q.172.725.174 1.5a6.5 6.5 0 1 1-13 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGlobeAfricaSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGlobeAmericasOutlineIcon],svg[teenyicons-globe-americas-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 5.5V5a.5.5 0 0 0-.5.5zm0 1l.354.354L5 6.707V6.5zm-1.707.293l-.354.353zM6.5 13H7v-.207l-.146-.147zm-1-1H5v.207l.146.147zm0-1.5H6v-.207l-.146-.147zm-1-1H4v.207l.146.147zm0-1V8a.5.5 0 0 0-.5.5zM9 .5v2h1v-2zM8.5 3h-1v1h1zm-3 2h-1v1h1zM4 5.5v1h1v-1zm.146.646l-.292.293l.707.707l.293-.292zm-1 .293L1.354 4.646l-.708.708L2.44 7.146zM6 4.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 7 4.5zM7.5 3A1.5 1.5 0 0 0 6 4.5h1a.5.5 0 0 1 .5-.5zM3.854 6.44a.5.5 0 0 1-.708 0l-.707.706a1.5 1.5 0 0 0 2.122 0zM9 2.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 10 2.5zm-2 12V13H6v1.5zm-.146-1.854l-1-1l-.708.708l1 1zM6 12v-1.5H5V12zm-.146-1.854l-1-1l-.708.708l1 1zM5 9.5v-1H4v1zM4.5 9h4V8h-4zm4.5.5v.667h1V9.5zm1.833 2.5H13.5v-1h-2.667zM10 11.167c0 .46.373.833.833.833v-1c.092 0 .167.075.167.167zM9.833 11c.092 0 .167.075.167.167h1C11 10.522 10.478 10 9.833 10zM9 10.167c0 .46.373.833.833.833v-1c.092 0 .167.075.167.167zM8.5 9a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 8.5 8zm-1 5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1z"></svg:path>`,
})
export class TeenyiconsGlobeAmericasOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGlobeAmericasSolidIcon],svg[teenyicons-globe-americas-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 0a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M1.197 5.904A6.503 6.503 0 0 0 6 13.826v-.619l-1-1v-1.5l-1-1V8.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 10 9.5v.512c.51.073.915.477.988.988h1.99A6.502 6.502 0 0 0 10 1.498V2.5A1.5 1.5 0 0 1 8.5 4h-1a.5.5 0 0 0-.5.5A1.5 1.5 0 0 1 5.5 6H5v.707l-.44.44a1.5 1.5 0 0 1-2.12 0z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGlobeAmericasSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGlobeOutlineIcon],svg[teenyicons-globe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 15v-3M4 14.5h7M11.469 1A6 6 0 1 1 3.5 9.972m4-7.472a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"></svg:path>`,
})
export class TeenyiconsGlobeOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGlobeSolidIcon],svg[teenyicons-globe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.5A6.5 6.5 0 0 0 11.8.625l-.662.75A5.5 5.5 0 1 1 3.834 9.6l-.667.745A6.48 6.48 0 0 0 7 11.98V14H4v1h7v-1H8v-2.019A6.5 6.5 0 0 0 14 5.5"></svg:path><svg:path fill="currentColor" d="M7.5 2a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"></svg:path>`,
})
export class TeenyiconsGlobeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleAdOutlineIcon],svg[teenyicons-google-ad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 10V7a1.5 1.5 0 1 1 3 0v3m5-5v5m0-2.5h-2a1 1 0 0 0 0 2h2m-8-1h3m-4-6h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"></svg:path>`,
})
export class TeenyiconsGoogleAdOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleAdSolidIcon],svg[teenyicons-google-ad-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6a1 1 0 0 0-1 1v1h2V7a1 1 0 0 0-1-1m6 2H9.5a.5.5 0 0 0 0 1H11z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.5A2.5 2.5 0 0 1 2.5 2h10A2.5 2.5 0 0 1 15 4.5v6a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 0 10.5zM4 10V9h2v1h1V7a2 2 0 1 0-4 0v3zm7-3H9.5a1.5 1.5 0 1 0 0 3H12V5h-1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGoogleAdSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleDriveOutlineIcon],svg[teenyicons-google-drive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m5 1.5l-4.5 8l2 4M5 1.5l2.5 4l-5 8M5 1.5h5l4.5 8M5 1.5l5 8h4.5m-12 4l2.5-4h9.5m-12 4h10l2-4"></svg:path>`,
})
export class TeenyiconsGoogleDriveOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleDriveSolidIcon],svg[teenyicons-google-drive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.563 1.258A.5.5 0 0 1 5 1h5a.5.5 0 0 1 .436.255L14.23 8H8.473L4.576 1.765a.5.5 0 0 1-.013-.507M3.91 14h8.59a.5.5 0 0 0 .447-.276l2-4A.5.5 0 0 0 14.5 9H7.092zM.064 9.255l3.792-6.742l3.05 4.88l-3.982 6.372a.5.5 0 0 1-.871-.041l-2-4a.5.5 0 0 1 .011-.47"></svg:path>`,
})
export class TeenyiconsGoogleDriveSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleOutlineIcon],svg[teenyicons-google-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 7.5h.5V7h-.5zm-7 6.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 0A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zm0 1c1.819 0 3.463.746 4.643 1.951l.714-.7A7.48 7.48 0 0 0 7.5 0zM8 8h6.5V7H8z"></svg:path>`,
})
export class TeenyiconsGoogleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGooglePlayStoreOutlineIcon],svg[teenyicons-google-play-store-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.5.5l.252-.432A.5.5 0 0 0 1 .5zm0 14H1a.5.5 0 0 0 .752.432zm12-7l.252.432a.5.5 0 0 0 0-.864zM1 .5v14h1V.5zm.752 14.432l12-7l-.504-.864l-12 7zm12-7.864l-12-7l-.504.864l12 7zM1.829 12.876l8-7l-.658-.752l-8 7zm-.658-10l8 7l.658-.752l-8-7z"></svg:path>`,
})
export class TeenyiconsGooglePlayStoreOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGooglePlayStoreSolidIcon],svg[teenyicons-google-play-store-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.251.066a.5.5 0 0 1 .5.002l7.843 4.575l-2.427 2.184L1 1.277V.5a.5.5 0 0 1 .251-.434M1 2.623v9.754L6.42 7.5zm0 11.1v.777a.5.5 0 0 0 .752.432l7.842-4.575l-2.427-2.184zm9.501-3.895l3.25-1.896a.5.5 0 0 0 0-.864l-3.25-1.896L7.914 7.5z"></svg:path>`,
})
export class TeenyiconsGooglePlayStoreSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleSolidIcon],svg[teenyicons-google-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 0 1 12.857-5.249l-.714.7A6.5 6.5 0 1 0 13.98 8H8V7h7v.5a7.5 7.5 0 0 1-15 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGoogleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleStreetviewOutlineIcon],svg[teenyicons-google-streetview-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 11.5H4a.5.5 0 0 0 .5.5zm6 0v.5a.5.5 0 0 0 .5-.5zm-6 .5h6v-1h-6zm6.5-.5v-2h-1v2zm-7-2v2h1v-2zM7.5 6A3.5 3.5 0 0 0 4 9.5h1A2.5 2.5 0 0 1 7.5 7zM11 9.5A3.5 3.5 0 0 0 7.5 6v1A2.5 2.5 0 0 1 10 9.5zm3 2c0 .245-.114.52-.406.816c-.294.299-.745.59-1.341.846c-1.191.51-2.871.838-4.753.838v1c1.984 0 3.804-.344 5.147-.92c.67-.287 1.245-.642 1.659-1.061c.416-.422.694-.936.694-1.519zM7.5 14c-1.882 0-3.562-.328-4.753-.838c-.596-.256-1.047-.547-1.341-.846C1.114 12.02 1 11.747 1 11.5H0c0 .583.278 1.097.694 1.519c.414.42.989.774 1.66 1.062C3.695 14.656 5.515 15 7.5 15zM1 11.5c0-.242.11-.513.394-.805c.286-.294.725-.582 1.306-.837l-.4-.916c-.656.287-1.218.64-1.622 1.056C.27 10.416 0 10.925 0 11.5zm11.3-1.642c.581.255 1.02.543 1.305.837c.284.292.395.563.395.805h1c0-.575-.27-1.084-.678-1.502c-.404-.416-.966-.769-1.622-1.056zM7.5 4A1.5 1.5 0 0 1 6 2.5H5A2.5 2.5 0 0 0 7.5 5zM9 2.5A1.5 1.5 0 0 1 7.5 4v1A2.5 2.5 0 0 0 10 2.5zM7.5 1A1.5 1.5 0 0 1 9 2.5h1A2.5 2.5 0 0 0 7.5 0zm0-1A2.5 2.5 0 0 0 5 2.5h1A1.5 1.5 0 0 1 7.5 1z"></svg:path>`,
})
export class TeenyiconsGoogleStreetviewOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleStreetviewSolidIcon],svg[teenyicons-google-streetview-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M7.5 6A3.5 3.5 0 0 0 4 9.5v2a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-2A3.5 3.5 0 0 0 7.5 6"></svg:path><svg:path fill="currentColor" d="M1.394 10.695c-.283.292-.394.563-.394.805c0 .245.114.52.406.816c.294.299.745.59 1.341.846c1.191.51 2.871.838 4.753.838s3.562-.328 4.753-.838c.596-.256 1.047-.547 1.341-.846c.292-.296.406-.57.406-.816c0-.242-.11-.513-.395-.805c-.285-.294-.724-.582-1.305-.837l.4-.916c.656.287 1.218.64 1.622 1.056c.407.418.678.927.678 1.502c0 .583-.278 1.097-.694 1.519c-.414.42-.989.774-1.66 1.062c-1.342.575-3.162.919-5.146.919s-3.804-.344-5.147-.92c-.67-.287-1.245-.642-1.659-1.061c-.416-.422-.694-.936-.694-1.52c0-.575.27-1.083.678-1.501c.404-.416.966-.769 1.622-1.056l.4.916c-.581.255-1.02.543-1.306.837"></svg:path>`,
})
export class TeenyiconsGoogleStreetviewSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGraphqlOutlineIcon],svg[teenyicons-graphql-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.61 4.432l4.142-2.417l-.504-.864l-4.143 2.417zM2 9.5v-4H1v4zm6.248-7.485l4.143 2.417l.504-.864l-4.143-2.417zM13 5.5v4h1v-4zm-.252 4.86l-4.5 2.625l.504.864l4.5-2.625zm-5.996 2.625l-4.143-2.417l-.504.864l4.143 2.417zM6.584 1.973l-5 7.5l.832.554l5-7.5zm6.832 7.5l-5-7.5l-.832.554l5 7.5zM2.5 11h10v-1h-10zm5-9a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 3zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 1.5zM7.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 0zm0-1A1.5 1.5 0 0 0 6 1.5h1a.5.5 0 0 1 .5-.5zm6 5a.5.5 0 0 1-.5-.5h-1A1.5 1.5 0 0 0 13.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 15 4.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 3zm0-1A1.5 1.5 0 0 0 12 4.5h1a.5.5 0 0 1 .5-.5zm0 8a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5zm.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 9zm0-1a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5zm-6 5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 15zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 13.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 12zm0-1A1.5 1.5 0 0 0 6 13.5h1a.5.5 0 0 1 .5-.5zm-6-1a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 12zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 3 10.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 1.5 9zm0-1A1.5 1.5 0 0 0 0 10.5h1a.5.5 0 0 1 .5-.5zm0-4a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 3 4.5zM1.5 4a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 1.5 3zm0-1A1.5 1.5 0 0 0 0 4.5h1a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class TeenyiconsGraphqlOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGraphqlSolidIcon],svg[teenyicons-graphql-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.015 1.287a1.5 1.5 0 0 1 2.97 0l3.545 2.069A1.5 1.5 0 1 1 14 5.916v3.17a1.5 1.5 0 1 1-1.47 2.559l-3.545 2.068a1.5 1.5 0 0 1-2.97 0L2.47 11.645A1.5 1.5 0 1 1 1 9.085v-3.17a1.5 1.5 0 1 1 1.47-2.56zm.225 1.027L2.974 4.219Q3 4.356 3 4.5a1.5 1.5 0 0 1-1 1.415v2.934l4.3-6.45zm.891.64l-4.43 6.647q.136.18.214.399h9.17q.078-.218.214-.4L7.87 2.955a1.5 1.5 0 0 1-.738 0m1.57-.555L13 8.85V5.915a1.5 1.5 0 0 1-.974-1.696L8.76 2.314zM11.65 11H3.349l2.89 1.686a1.5 1.5 0 0 1 2.521 0zM7.5 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-6 3a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m12 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-12 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m12 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-6 3a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGraphqlSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGridLayoutOutlineIcon],svg[teenyicons-grid-layout-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm8 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm0 8h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-8 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"></svg:path>`,
})
export class TeenyiconsGridLayoutOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGridLayoutSolidIcon],svg[teenyicons-grid-layout-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v4A1.5 1.5 0 0 0 1.5 7h4A1.5 1.5 0 0 0 7 5.5v-4A1.5 1.5 0 0 0 5.5 0zm8 0A1.5 1.5 0 0 0 8 1.5v4A1.5 1.5 0 0 0 9.5 7h4A1.5 1.5 0 0 0 15 5.5v-4A1.5 1.5 0 0 0 13.5 0zm-8 8A1.5 1.5 0 0 0 0 9.5v4A1.5 1.5 0 0 0 1.5 15h4A1.5 1.5 0 0 0 7 13.5v-4A1.5 1.5 0 0 0 5.5 8zm8 0A1.5 1.5 0 0 0 8 9.5v4A1.5 1.5 0 0 0 9.5 15h4a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 13.5 8z"></svg:path>`,
})
export class TeenyiconsGridLayoutSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHashtagOutlineIcon],svg[teenyicons-hashtag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 5.5h11m-11 4h11m-6.5-8l-2 12m6-12l-2 12"></svg:path>`,
})
export class TeenyiconsHashtagOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHashtagSolidIcon],svg[teenyicons-hashtag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.41 5l.597-3.582l.986.164L6.423 5H9.41l.597-3.582l.986.164L10.423 5H13v1h-2.743l-.5 3H13v1H9.59l-.597 3.582l-.986-.164l.57-3.418H5.59l-.597 3.582l-.986-.164l.57-3.418H2V9h2.743l.5-3H2V5zm.847 1l-.5 3h2.986l.5-3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsHashtagSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHdScreenOutlineIcon],svg[teenyicons-hd-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 13.5h11m-5.5-3V14m6.69-2.589a24.35 24.35 0 0 0-13.38 0a.243.243 0 0 1-.31-.234V1.823c0-.162.155-.279.31-.234a24.35 24.35 0 0 0 13.38 0a.243.243 0 0 1 .31.234v9.354a.243.243 0 0 1-.31.234Z"></svg:path>`,
})
export class TeenyiconsHdScreenOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHdScreenSolidIcon],svg[teenyicons-hd-screen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.948 1.108A.744.744 0 0 0 0 1.823v9.354c0 .494.473.85.948.715A24 24 0 0 1 7 10.98V13H2v1h11v-1H8v-2.02c2.039.042 4.073.346 6.052.912a.744.744 0 0 0 .948-.715V1.823a.744.744 0 0 0-.948-.715a23.85 23.85 0 0 1-13.104 0"></svg:path>`,
})
export class TeenyiconsHdScreenSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHdmiCableOutlineIcon],svg[teenyicons-hdmi-cable-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 4V.5h8V4M5 2.5h1m3 0h1M5.5 13v2m4-2v2m-7-10.5h10v5l-2 1v2h-6v-2l-2-1z"></svg:path>`,
})
export class TeenyiconsHdmiCableOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHdmiCableSolidIcon],svg[teenyicons-hdmi-cable-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 0h9v5H3zm3 3H5V2h1zm4 0H9V2h1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 6h11v3.809l-2 1V13h-1v2H9v-2H6v2H5v-2H4v-2.191l-2-1z"></svg:path>`,
})
export class TeenyiconsHdmiCableSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeadphonesOutlineIcon],svg[teenyicons-headphones-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 9.5h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Zm0 0v-3a6 6 0 1 1 12 0v3m0 0h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z"></svg:path>`,
})
export class TeenyiconsHeadphonesOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeadphonesSolidIcon],svg[teenyicons-headphones-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5a5.5 5.5 0 1 1 11 0V9h-.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1-1.415V6.5a6.5 6.5 0 1 0-13 0v2.585A1.5 1.5 0 0 0 0 10.5v3A1.5 1.5 0 0 0 1.5 15h1A1.5 1.5 0 0 0 4 13.5v-3A1.5 1.5 0 0 0 2.5 9H2z"></svg:path>`,
})
export class TeenyiconsHeadphonesSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeadsetOutlineIcon],svg[teenyicons-headset-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 12.5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm0 0a2 2 0 0 1-2 2H8m6.5-4.5V7.5a7 7 0 1 0-14 0V10m2 2.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2Z"></svg:path>`,
})
export class TeenyiconsHeadsetOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeadsetSolidIcon],svg[teenyicons-headset-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 6a2.5 2.5 0 0 0-1.414.438a6.502 6.502 0 0 1 12.828 0A2.5 2.5 0 0 0 12.5 6A1.5 1.5 0 0 0 11 7.5v4a1.5 1.5 0 0 0 .947 1.395A1.5 1.5 0 0 1 10.5 14H8v1h2.5a2.5 2.5 0 0 0 2.458-2.042A2.5 2.5 0 0 0 15 10.5v-3a7.5 7.5 0 0 0-15 0v3A2.5 2.5 0 0 0 2.5 13A1.5 1.5 0 0 0 4 11.5v-4A1.5 1.5 0 0 0 2.5 6"></svg:path>`,
})
export class TeenyiconsHeadsetSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeartCircleOutlineIcon],svg[teenyicons-heart-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m6.5 5.5l1 1l1-1a1.414 1.414 0 0 1 2 2l-3 3l-3-3a1.414 1.414 0 0 1 2-2Z"></svg:path><svg:path d="M.5 7.5a7 7 0 1 0 14 0a7 7 0 0 0-14 0Z"></svg:path></svg:g>`,
})
export class TeenyiconsHeartCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeartCircleSolidIcon],svg[teenyicons-heart-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m4.146-2.354a1.914 1.914 0 0 1 2.707 0l.647.647l.646-.647a1.914 1.914 0 0 1 2.707 2.708L7.5 11.207L4.146 7.854a1.914 1.914 0 0 1 0-2.708" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsHeartCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeartOutlineIcon],svg[teenyicons-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 13.5l-.354.354a.5.5 0 0 0 .708 0zM1.536 7.536l-.354.353zm5-5l-.354.353zM7.5 3.5l-.354.354a.5.5 0 0 0 .708 0zm.964-.964l-.353-.354zm-.61 10.61L1.889 7.182l-.707.707l5.964 5.965zm5.257-5.964l-5.965 5.964l.708.708l5.964-5.965zM6.182 2.889l.964.965l.708-.708l-.965-.964zm1.672.965l.964-.965l-.707-.707l-.965.964zM10.964 1c-1.07 0-2.096.425-2.853 1.182l.707.707A3.04 3.04 0 0 1 10.964 2zM14 5.036c0 .805-.32 1.577-.89 2.146l.708.707A4.04 4.04 0 0 0 15 5.036zm1 0A4.036 4.036 0 0 0 10.964 1v1A3.036 3.036 0 0 1 14 5.036zM4.036 2c.805 0 1.577.32 2.146.89l.707-.708A4.04 4.04 0 0 0 4.036 1zM1 5.036A3.036 3.036 0 0 1 4.036 2V1A4.036 4.036 0 0 0 0 5.036zm.89 2.146A3.04 3.04 0 0 1 1 5.036H0c0 1.07.425 2.096 1.182 2.853z"></svg:path>`,
})
export class TeenyiconsHeartOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeartSmallOutlineIcon],svg[teenyicons-heart-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m6.5 5.5l1 1l1-1a1.414 1.414 0 1 1 2 2l-3 3l-3-3a1.414 1.414 0 1 1 2-2Z"></svg:path>`,
})
export class TeenyiconsHeartSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeartSmallSolidIcon],svg[teenyicons-heart-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.765 5.235a1.79 1.79 0 1 0-2.53 2.53L7.5 11.03l3.265-3.265a1.79 1.79 0 0 0-2.53-2.53L7.5 5.97z"></svg:path>`,
})
export class TeenyiconsHeartSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeartSolidIcon],svg[teenyicons-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.036 1a4.036 4.036 0 0 0-2.854 6.89l5.964 5.964a.5.5 0 0 0 .708 0l5.964-5.965a4.036 4.036 0 0 0-5.707-5.707l-.611.61l-.61-.61A4.04 4.04 0 0 0 4.035 1"></svg:path>`,
})
export class TeenyiconsHeartSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHexagonOutlineIcon],svg[teenyicons-hexagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 4.5v6l6 3.5l6-3.5v-6L7.5 1z"></svg:path>`,
})
export class TeenyiconsHexagonOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHexagonSolidIcon],svg[teenyicons-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.213L7.5.42L1 4.213v6.574l6.5 3.792l6.5-3.792z"></svg:path>`,
})
export class TeenyiconsHexagonSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHistoryOutlineIcon],svg[teenyicons-history-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 12.399l.37-.336l-.006-.007l-.007-.007zm1 1.101v.5H4v-.5zm3.5.982l.018-.5l-.053 1zM7.5 7.5H7a.5.5 0 0 0 .146.354zm6.5 0A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM2.857 12.049A6.48 6.48 0 0 1 1 7.5H0c0 2.043.818 3.897 2.143 5.249zm-.727.686l1 1.101l.74-.672l-1-1.101zM7.5 14a7 7 0 0 1-.465-.016l-.07.997q.265.02.535.019zm.018 0l-.5-.017l-.036 1l.5.017zM7 3v4.5h1V3zm.146 4.854l3 3l.708-.708l-3-3zM0 14h3.5v-1H0zm4-.5V10H3v3.5z"></svg:path>`,
})
export class TeenyiconsHistoryOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHistorySolidIcon],svg[teenyicons-history-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 6.965 7.481l.053-.998l.49.017a6.5 6.5 0 1 0-4.65-1.951l.006.007l.136.15V10h1v4H0v-1h2.37l-.234-.258A7.48 7.48 0 0 1 0 7.5m7 0V3h1v4.293l2.854 2.853l-.708.708l-3-3A.5.5 0 0 1 7 7.5" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsHistorySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHomeAltOutlineIcon],svg[teenyicons-home-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5.5l.354-.354a.5.5 0 0 0-.708 0zm-6 6l-.354-.354L1 6.293V6.5zm12 0h.5v-.207l-.146-.147zm.354-.354l-6-6l-.708.708l6 6zm-6.708-6l-6 6l.708.708l6-6zM14 13.5v-7h-1v7zm-13-7v7h1v-7zM2.5 15h10v-1h-10zM13 13.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zm-12 0A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class TeenyiconsHomeAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHomeAltSolidIcon],svg[teenyicons-home-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.854.146a.5.5 0 0 0-.708 0L1 6.293V13.5A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.293z"></svg:path>`,
})
export class TeenyiconsHomeAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHomeOutlineIcon],svg[teenyicons-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5.5l.325-.38a.5.5 0 0 0-.65 0zm-7 6l-.325-.38L0 6.27v.23zm5 8v.5a.5.5 0 0 0 .5-.5zm4 0H9a.5.5 0 0 0 .5.5zm5-8h.5v-.23l-.175-.15zM1.5 15h4v-1h-4zm13.325-8.88l-7-6l-.65.76l7 6zm-7.65-6l-7 6l.65.76l7-6zM6 14.5v-3H5v3zm3-3v3h1v-3zm.5 3.5h4v-1h-4zm5.5-1.5v-7h-1v7zm-15-7v7h1v-7zM7.5 10A1.5 1.5 0 0 1 9 11.5h1A2.5 2.5 0 0 0 7.5 9zm0-1A2.5 2.5 0 0 0 5 11.5h1A1.5 1.5 0 0 1 7.5 10zm6 6a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zm-12-1a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 15z"></svg:path>`,
})
export class TeenyiconsHomeOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHomeSolidIcon],svg[teenyicons-home-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.825.12a.5.5 0 0 0-.65 0L0 6.27v7.23A1.5 1.5 0 0 0 1.5 15h4a.5.5 0 0 0 .5-.5v-3a1.5 1.5 0 0 1 3 0v3a.5.5 0 0 0 .5.5h4a1.5 1.5 0 0 0 1.5-1.5V6.27z"></svg:path>`,
})
export class TeenyiconsHomeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHospitalOutlineIcon],svg[teenyicons-hospital-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5.5l.224-.447a.5.5 0 0 0-.448 0zm-6 3l-.224-.447A.5.5 0 0 0 1 3.5zm12 0h.5a.5.5 0 0 0-.276-.447zm-8 7V10H5v.5zm4 0h.5V10h-.5zM0 15h15v-1H0zM7.276.053l-6 3l.448.894l6-3zm6.448 3l-6-3l-.448.894l6 3zM7 3v2.5h1V3zm0 2.5V8h1V5.5zM5 6h2.5V5H5zm2.5 0H10V5H7.5zM1 3.5v11h1v-11zm12 0v11h1v-11zm-7 11v-4H5v4zM5.5 11h4v-1h-4zm3.5-.5v4h1v-4z"></svg:path>`,
})
export class TeenyiconsHospitalOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHospitalSolidIcon],svg[teenyicons-hospital-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.724.053a.5.5 0 0 0-.448 0l-5.99 2.995A.5.5 0 0 0 1 3.5V14H0v1h5v-5h5v5h5v-1h-1V3.5a.5.5 0 0 0-.286-.452zM7 5V3h1v2h2v1H8v2H7V6H5V5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 15v-4H6v4z"></svg:path>`,
})
export class TeenyiconsHospitalSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHourglassOutlineIcon],svg[teenyicons-hourglass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 0v4.672a2 2 0 0 0 .586 1.414l.707.707a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 0-.293.707V15m8-15v5.086a1 1 0 0 1-.293.707l-1 1a1 1 0 0 0 0 1.414l1 1a1 1 0 0 1 .293.707V15M1 .5h13m-13 14h13"></svg:path>`,
})
export class TeenyiconsHourglassOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHourglassSolidIcon],svg[teenyicons-hourglass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1h2V0H1v1h2v3.672a2.5 2.5 0 0 0 .732 1.767l.707.707a.5.5 0 0 1 0 .708l-1 1A1.5 1.5 0 0 0 3 9.914V14H1v1h13v-1h-2V9.914a1.5 1.5 0 0 0-.44-1.06l-1-1a.5.5 0 0 1 0-.708l1-1a1.5 1.5 0 0 0 .44-1.06zM4.25 5.5h6.543l.06-.06A.5.5 0 0 0 11 5.085V1H4v3.672c0 .296.088.584.25.828" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsHourglassSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHouseOutlineIcon],svg[teenyicons-house-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 5.5l-.29-.407l-.21.15V5.5zm7-5l.29-.407a.5.5 0 0 0-.58 0zm7 5h.5v-.257l-.21-.15zm-12 3V8H2v.5zm4 0H7V8h-.5zM1 15V5.5H0V15zM.79 5.907l7-5l-.58-.814l-7 5zm6.42-5l7 5l.58-.814l-7-5zM14 5.5V15h1V5.5zM3 15V8.5H2V15zm-.5-6h4V8h-4zM6 8.5V15h1V8.5zM5 12h1.5v-1H5zm6-4v4h1V8zm2-6v2.5h1V2z"></svg:path>`,
})
export class TeenyiconsHouseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHouseSolidIcon],svg[teenyicons-house-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.79.093a.5.5 0 0 0-.58 0l-7 5A.5.5 0 0 0 0 5.5v9a.5.5 0 0 0 .5.5H2V8h5v7h7.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.21-.407L14 4.528V2h-1v1.814zM11 12V8h1v4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6 15v-3H5v-1h1V9H3v6z"></svg:path>`,
})
export class TeenyiconsHouseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHtml5OutlineIcon],svg[teenyicons-html5-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5.5V0a.5.5 0 0 0-.498.542zm14 0l.498.042A.5.5 0 0 0 14.5 0zm-1 12l.158.474a.5.5 0 0 0 .34-.433zm-6 2l-.158.474a.5.5 0 0 0 .316 0zm-6-2l-.498.041a.5.5 0 0 0 .34.433zm3-9V3H4v.5zm0 3H4V7h.5zm6 0h.5V6h-.5zm0 3l.158.474L11 9.86V9.5zm-3 1l-.158.474l.158.053l.158-.053zm-3-1H4v.36l.342.114zM.5 1h14V0H.5zM14.002.458l-1 12l.996.083l1-12zm-.66 11.568l-6 2l.316.948l6-2zm-5.684 2l-6-2l-.316.948l6 2zm-5.66-1.567l-1-12l-.996.083l1 12zM11 3H4.5v1H11zm-7 .5v3h1v-3zM4.5 7h6V6h-6zm5.5-.5v3h1v-3zm.342 2.526l-3 1l.316.948l3-1zm-2.684 1l-3-1l-.316.948l3 1zM5 9.5V8H4v1.5z"></svg:path>`,
})
export class TeenyiconsHtml5OutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHtml5SolidIcon],svg[teenyicons-html5-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.132.161A.5.5 0 0 1 .5 0h14a.5.5 0 0 1 .498.542l-1 12a.5.5 0 0 1-.34.432l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1-.34-.433l-1-12a.5.5 0 0 1 .13-.38M11 3H4v4h6v2.14l-2.5.833L5 9.14V8H4v1.86l3.5 1.167L11 9.86V6H5V4h6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsHtml5SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIdOutlineIcon],svg[teenyicons-id-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.5v.5h1v-.5zm5 0v.5h1v-.5zm-4 0V12H2v.5zm4-.5v.5h1V12zm-2-2a2 2 0 0 1 2 2h1a3 3 0 0 0-3-3zm-2 2a2 2 0 0 1 2-2V9a3 3 0 0 0-3 3zm2-8a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1zm2 2a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1zM5 8a2 2 0 0 0 2-2H6a1 1 0 0 1-1 1zm0-1a1 1 0 0 1-1-1H3a2 2 0 0 0 2 2zM1.5 3h12V2h-12zm12.5.5v8h1v-8zm-.5 8.5h-12v1h12zM1 11.5v-8H0v8zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 13zm12.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM13.5 3a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 2zm-12-1A1.5 1.5 0 0 0 0 3.5h1a.5.5 0 0 1 .5-.5zM9 6h3V5H9zm0 3h3V8H9z"></svg:path>`,
})
export class TeenyiconsIdOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIdSolidIcon],svg[teenyicons-id-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5zM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9 0H9V5h3zm0 3H9V8h3zM5 9a2.93 2.93 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.93 2.93 0 0 0 5 9" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsIdSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsImacOutlineIcon],svg[teenyicons-imac-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 14.5h11m-5.5-4v4M0 7.5h15M.5 1.5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1Z"></svg:path>`,
})
export class TeenyiconsImacOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsImacSolidIcon],svg[teenyicons-imac-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 0A1.5 1.5 0 0 1 15 1.5V7H0V1.5A1.5 1.5 0 0 1 1.5 0zM0 8v1.5A1.5 1.5 0 0 0 1.5 11H7v3H2v1h11v-1H8v-3h5.5A1.5 1.5 0 0 0 15 9.5V8z"></svg:path>`,
})
export class TeenyiconsImacSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsImageAltOutlineIcon],svg[teenyicons-image-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 3.5h1m3.5 5.993l-3-2.998l-3 2.998l-4-4.996L.5 9.5m1-9h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsImageAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsImageAltSolidIcon],svg[teenyicons-image-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h-1V3h1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12.01A1.5 1.5 0 0 1 13.5 15h-12A1.5 1.5 0 0 1 0 13.5zm14 6.787l-2.5-2.498l-2.959 2.956L4.5 3.696L1 8.074V1.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsImageAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsImageDocumentOutlineIcon],svg[teenyicons-image-document-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3.5h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zm1 7.995l.354-.353l-.353-.354l-.354.354zm-3 2.999l-.39.312l.349.436l.394-.395zM4.5 6.5l.39-.313l-.403-.503L4.1 6.2zm8 7.5h-10v1h10zM2 13.5v-12H1v12zm11-10v10h1v-10zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM10 6h1V5h-1zm3.854 4.147l-2-2.005l-.708.707l2 2.004zm-2.707-2.005l-3 2.998l.706.707l3-2.998zM8.89 11.18l-4-4.994l-.78.626l4 4.993zM4.1 6.2l-3 4l.8.6l3-4z"></svg:path>`,
})
export class TeenyiconsImageDocumentOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsImageDocumentSolidIcon],svg[teenyicons-image-document-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293v6.999l-2.5-2.504l-2.959 2.957L4.5 5.7L1 10.075zM11 6h-1V5h1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M1 11.676V13.5A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5v-1.793l-2.5-2.504l-3.041 3.039L4.5 7.3z"></svg:path>`,
})
export class TeenyiconsImageDocumentSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsImageOutlineIcon],svg[teenyicons-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.5 3.5l.354-.354a.5.5 0 0 0-.708 0zM1.5 1h12V0h-12zm12.5.5v12h1v-12zM13.5 14h-12v1h12zM1 13.5v-12H0v12zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 15zm12.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM13.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 0zm-12-1A1.5 1.5 0 0 0 0 1.5h1a.5.5 0 0 1 .5-.5zm-1 11h14v-1H.5zm.354-3.146l4-4l-.708-.708l-4 4zm3.292-4l7 7l.708-.708l-7-7zM10.5 5a.5.5 0 0 1-.5-.5H9A1.5 1.5 0 0 0 10.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 12 4.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 10.5 3zm0-1A1.5 1.5 0 0 0 9 4.5h1a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class TeenyiconsImageOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsImageSolidIcon],svg[teenyicons-image-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12a1.5 1.5 0 0 1-.178.71A1.5 1.5 0 0 1 13.5 15h-12A1.5 1.5 0 0 1 0 13.5zm4.85 1.642l-.35-.35l-3.5 3.5V1.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5V10h-2.293L4.854 3.146z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsImageSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInEarHeadphonesOutlineIcon],svg[teenyicons-in-ear-headphones-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 12.5v.5h.5v-.5zm-2 0H12v.5h.5zm-12 0H0v.5h.5zm2 0v.5H3v-.5zM10 5V1.654H9V5zm4-1.5v9h1v-9zm.5 8.5h-2v1h2zm-2-6H11v1h1.5zm-1.846-5h.846V0h-.846zM11 6a1 1 0 0 1-1-1H9a2 2 0 0 0 2 2zm4-2.5A3.5 3.5 0 0 0 11.5 0v1A2.5 2.5 0 0 1 14 3.5zm-5-1.846c0-.361.293-.654.654-.654V0C9.74 0 9 .74 9 1.654zM13 12.5V15h1v-2.5zM6 5V1.654H5V5zM0 3.5v9h1v-9zM.5 13h2v-1h-2zm2-6H4V6H2.5zm1.846-7H3.5v1h.846zM4 7a2 2 0 0 0 2-2H5a1 1 0 0 1-1 1zM1 3.5A2.5 2.5 0 0 1 3.5 1V0A3.5 3.5 0 0 0 0 3.5zm5-1.846C6 .74 5.26 0 4.346 0v1c.361 0 .654.293.654.654zM1 12.5V15h1v-2.5zM12 4v2.5h1V4zM2 4v2.5h1V4zm11 8.5v-6h-1v6zm-10 0v-6H2v6z"></svg:path>`,
})
export class TeenyiconsInEarHeadphonesOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInEarHeadphonesSolidIcon],svg[teenyicons-in-ear-headphones-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1.654C6 .74 5.26 0 4.346 0H3.5A3.5 3.5 0 0 0 0 3.5V13h1v2h1v-2h1V7h1a2 2 0 0 0 2-2zM10.654 0C9.74 0 9 .74 9 1.654V5a2 2 0 0 0 2 2h1v6h1v2h1v-2h1V3.5A3.5 3.5 0 0 0 11.5 0z"></svg:path>`,
})
export class TeenyiconsInEarHeadphonesSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInboxOutlineIcon],svg[teenyicons-inbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.713 11.493l-.035-.5zM1.5 1h12V0h-12zm12.5.5v12h1v-12zM13.5 14h-12v1h12zM1 13.5v-12H0v12zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 15zm12.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM13.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 0zm-12-1A1.5 1.5 0 0 0 0 1.5h1a.5.5 0 0 1 .5-.5zm6 12q.125 0 .248-.009l-.07-.997A3 3 0 0 1 7.5 11zm-.823-.098Q7.074 12 7.5 12v-1q-.305 0-.589-.07zm.234-.972c-.969-.233-1.9-.895-2.97-1.586C2.924 8.687 1.771 8 .5 8v1c.938 0 1.858.512 2.899 1.184c.987.638 2.099 1.434 3.278 1.719zm.837 1.061c1.386-.097 2.7-.927 3.865-1.632C12.843 9.616 13.922 9 15 9V8c-1.407 0-2.732.794-3.905 1.503c-1.237.749-2.324 1.414-3.417 1.49z"></svg:path>`,
})
export class TeenyiconsInboxOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInboxSolidIcon],svg[teenyicons-inbox-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5V8h-4.5a.5.5 0 0 0-.5.5a2.5 2.5 0 0 1-5 0a.5.5 0 0 0-.5-.5H0z"></svg:path><svg:path fill="currentColor" d="M0 9v4.5A1.5 1.5 0 0 0 1.5 15h12a1.5 1.5 0 0 0 1.5-1.5V9h-4.035a3.5 3.5 0 0 1-6.93 0z"></svg:path>`,
})
export class TeenyiconsInboxSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIndentDecreaseOutlineIcon],svg[teenyicons-indent-decrease-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 7.5l-.354-.354a.5.5 0 0 0 0 .708zM3 4h12V3H3zm4 4h8V7H7zm-4 4h12v-1H3zm-.146-2.854l-2-2l-.708.708l2 2zm-2-1.292l2-2l-.708-.708l-2 2z"></svg:path>`,
})
export class TeenyiconsIndentDecreaseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIndentDecreaseSolidIcon],svg[teenyicons-indent-decrease-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4H3V3h12zM1.207 7.5l1.647-1.646l-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2l.708-.708zM15 8H7V7h8zm0 4H3v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsIndentDecreaseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIndentIncreaseOutlineIcon],svg[teenyicons-indent-increase-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 7.5l.354.354a.5.5 0 0 0 0-.708zM3 4h12V3H3zm4 4h8V7H7zm-4 4h12v-1H3zM.854 9.854l2-2l-.708-.708l-2 2zm2-2.708l-2-2l-.708.708l2 2z"></svg:path>`,
})
export class TeenyiconsIndentIncreaseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIndentIncreaseSolidIcon],svg[teenyicons-indent-increase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4H3V3h12zM.854 5.146l2 2a.5.5 0 0 1 0 .708l-2 2l-.708-.708L1.793 7.5L.146 5.854zM15 8H7V7h8zm0 4H3v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsIndentIncreaseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInfoCircleOutlineIcon],svg[teenyicons-info-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.5V5h1v-.5zm1-.01v-.5H7v.5zM8 11V7H7v4zm0-6.5v-.01H7v.01zM6 8h1.5V7H6zm0 3h3v-1H6zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zm0 1A7.5 7.5 0 0 0 15 7.5h-1A6.5 6.5 0 0 1 7.5 14z"></svg:path>`,
})
export class TeenyiconsInfoCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInfoCircleSolidIcon],svg[teenyicons-info-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 7.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0M7 5V3.99h1V5zm1 2v3h1v1H6v-1h1V8H6V7z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsInfoCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInfoOutlineIcon],svg[teenyicons-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1.5V2h1v-.5zm1-.01v-.5H7v.5zM8 13.5V4H7v9.5zm0-12v-.01H7v.01zM4 5h3.5V4H4zm-2 9h11v-1H2z"></svg:path>`,
})
export class TeenyiconsInfoOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInfoSmallOutlineIcon],svg[teenyicons-info-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.5V5h1v-.5zm1-.01v-.5H7v.5zM8 11V7H7v4zm0-6.5v-.01H7v.01zM6 8h1.5V7H6zm0 3h3v-1H6z"></svg:path>`,
})
export class TeenyiconsInfoSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInfoSmallSolidIcon],svg[teenyicons-info-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.99V5H7V3.99zM6 11v-1h1V8H6V7h2v3h1v1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsInfoSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInfoSolidIcon],svg[teenyicons-info-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 .99V2H7V.99zM7 13H2v1h11v-1H8V4H4v1h3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsInfoSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInstagramOutlineIcon],svg[teenyicons-instagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class TeenyiconsInstagramOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInstagramSolidIcon],svg[teenyicons-instagram-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 0A4.5 4.5 0 0 0 0 4.5v6A4.5 4.5 0 0 0 4.5 15h6a4.5 4.5 0 0 0 4.5-4.5v-6A4.5 4.5 0 0 0 10.5 0zM4 7.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M11 4h1V3h-1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsInstagramSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInvoiceOutlineIcon],svg[teenyicons-invoice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6.995H4v1h.5zm6 1h.5v-1h-.5zM4.5 9.5H4v.5h.5zm6 0v.5h.5v-.5zm-6-4V5H4v.5zm6 0h.5V5h-.5zm3-2h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zm-6 7.495h6v-1h-6zM4.5 10h6V9h-6zm0-4h6V5h-6zm8 8h-10v1h10zM2 13.5v-12H1v12zm11-10v10h1v-10zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zm2 4v4h1v-4zm3 0v4h1v-4zm3 0v4h1v-4zM4 4h3V3H4zm4 8h3v-1H8z"></svg:path>`,
})
export class TeenyiconsInvoiceOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInvoiceSolidIcon],svg[teenyicons-invoice-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.995V9H8V7.995zM10 6v.995H8V6zM7 6H5v.995h2zm0 1.995H5V9h2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM4 4h3V3H4zm7 1H4v5h7zm0 7H8v-1h3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsInvoiceSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsItalicOutlineIcon],svg[teenyicons-italic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 1.5h9m-11 12h9m-2.5-12l-2 12"></svg:path>`,
})
export class TeenyiconsItalicOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsItalicSolidIcon],svg[teenyicons-italic-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.91 2H4V1h9v1H8.924L7.09 13H11v1H2v-1h4.076z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsItalicSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsJavascriptOutlineIcon],svg[teenyicons-javascript-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5z"></svg:path>`,
})
export class TeenyiconsJavascriptOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsJavascriptSolidIcon],svg[teenyicons-javascript-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 0H0v15h15zM8 8a2 2 0 0 1 2-2h1.167C12.179 6 13 6.82 13 7.833V8h-1v-.167A.833.833 0 0 0 11.167 7H10a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4h-1a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2h-1a2 2 0 0 1-2-2M6 6v5a1 1 0 1 1-2 0H3a2 2 0 1 0 4 0V6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsJavascriptSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsJoystickOutlineIcon],svg[teenyicons-joystick-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 10.5V10a.5.5 0 0 0-.5.5zm12 0h.5a.5.5 0 0 0-.5-.5zm0 4v.5a.5.5 0 0 0 .5-.5zm-12 0H1a.5.5 0 0 0 .5.5zm0-3.5h12v-1h-12zm11.5-.5v4h1v-4zm.5 3.5h-12v1h12zM2 14.5v-4H1v4zm6-4v-4H7v4zM7.5 0A3.5 3.5 0 0 0 4 3.5h1A2.5 2.5 0 0 1 7.5 1zM11 3.5A3.5 3.5 0 0 0 7.5 0v1A2.5 2.5 0 0 1 10 3.5zM7.5 7A3.5 3.5 0 0 0 11 3.5h-1A2.5 2.5 0 0 1 7.5 6zm0-1A2.5 2.5 0 0 1 5 3.5H4A3.5 3.5 0 0 0 7.5 7zM3 9h2V8H3z"></svg:path>`,
})
export class TeenyiconsJoystickOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsJoystickSolidIcon],svg[teenyicons-joystick-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.5a3.5 3.5 0 1 1 4 3.465V10h5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H7V6.965A3.5 3.5 0 0 1 4 3.5"></svg:path><svg:path fill="currentColor" d="M3 8v1h2V8z"></svg:path>`,
})
export class TeenyiconsJoystickSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsJpgOutlineIcon],svg[teenyicons-jpg-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6.5V6H6v.5zm4 4H10v.5h.5zm2 0v.5h.5v-.5zm1-7h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zm-6 6H5V6h-.5zm0 4v.5H5v-.5zm-2 0H2v.5h.5zm4-3.5h1V6h-1zm.5 4V8.5H6V11zm0-2.5v-2H6v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 7.5zM7.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 6zM10 6v4.5h1V6zm.5 5h2v-1h-2zm2.5-.5v-2h-1v2zM10.5 7H13V6h-2.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM2 7h2.5V6H2zm2-.5v4h1v-4zm.5 3.5h-2v1h2zm-1.5.5V9H2v1.5z"></svg:path>`,
})
export class TeenyiconsJpgOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsJpgSolidIcon],svg[teenyicons-jpg-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8h.5a.5.5 0 0 0 0-1H7z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM4 7H2V6h3v5H2V9h1v1h1zm2-1h1.5a1.5 1.5 0 1 1 0 3H7v2H6zm4 0h3v1h-2v3h1V8.5h1V11h-3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsJpgSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsKanbanOutlineIcon],svg[teenyicons-kanban-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 3.5V3a.5.5 0 0 0-.5.5zm6 0H7a.5.5 0 0 0-.5-.5zm0 11v.5a.5.5 0 0 0 .5-.5zm-6 0H0a.5.5 0 0 0 .5.5zm8-11V3a.5.5 0 0 0-.5.5zm6 0h.5a.5.5 0 0 0-.5-.5zm0 6v.5a.5.5 0 0 0 .5-.5zm-6 0H8a.5.5 0 0 0 .5.5zM0 1h7V0H0zm8 0h7V0H8zM.5 4h6V3h-6zM6 3.5v11h1v-11zM6.5 14h-6v1h6zm-5.5.5v-11H0v11zM8.5 4h6V3h-6zm5.5-.5v6h1v-6zm.5 5.5h-6v1h6zM9 9.5v-6H8v6z"></svg:path>`,
})
export class TeenyiconsKanbanOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsKanbanSolidIcon],svg[teenyicons-kanban-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h7V0H0zm8 0h7V0H8zM.5 3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm8 0a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class TeenyiconsKanbanSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsKeyOutlineIcon],svg[teenyicons-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5 14.5l8-8m-6 6l2 2m0-4l2 2m4.5-5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Z"></svg:path>`,
})
export class TeenyiconsKeyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsKeySolidIcon],svg[teenyicons-key-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 4a4 4 0 1 1 1.547 3.16l-3.34 3.34l1.647 1.646l-.708.708L4.5 11.207L3.207 12.5l1.647 1.646l-.708.708L2.5 13.207L.854 14.854l-.708-.708L7.84 6.453A4 4 0 0 1 7 4m4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsKeySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsKeyboardOutlineIcon],svg[teenyicons-keyboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 11.5H4m7-3h-1m-2 0H7m-2 0H4m7-2h-1m-2 0H7m-2 0H4m3.5-2V0m6 4.5h-12a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Z"></svg:path>`,
})
export class TeenyiconsKeyboardOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsKeyboardSolidIcon],svg[teenyicons-keyboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0v4h5.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-7A1.5 1.5 0 0 1 1.5 4H7V0zm2 6h1v1h-1zm1 2h-1v1h1zm0 3H4v1h7zM7 8h1v1H7zM5 8H4v1h1zm3-2H7v1h1zM4 6h1v1H4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsKeyboardSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLanCableOutlineIcon],svg[teenyicons-lan-cable-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 11.5V15m2-3.5V15M6 9.5h3M6.5.5v2h2v-2m-4 0h6v4h1v3l-2 4h-4l-2-4v-3h1zm2 4v2a1 1 0 0 0 2 0v-2z"></svg:path>`,
})
export class TeenyiconsLanCableOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLanCableSolidIcon],svg[teenyicons-lan-cable-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6.5V5h1v1.5a.5.5 0 0 1-1 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 0h2v4h1v3.618L9.809 12H9v3H8v-3H7v3H6v-3h-.809L3 7.618V4h1V0h2v3h3zm0 4H6v2.5a1.5 1.5 0 1 0 3 0zM6 9v1h3V9z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 0H7v2h1z"></svg:path>`,
})
export class TeenyiconsLanCableSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLaptopOutlineIcon],svg[teenyicons-laptop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 13.5h15M1.5 2.5v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1Z"></svg:path>`,
})
export class TeenyiconsLaptopOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLaptopSolidIcon],svg[teenyicons-laptop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 1A1.5 1.5 0 0 0 1 2.5v8A1.5 1.5 0 0 0 2.5 12h10a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 12.5 1zM0 14h15v-1H0z"></svg:path>`,
})
export class TeenyiconsLaptopSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLaravelOutlineIcon],svg[teenyicons-laravel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3.571l-.158-.474a.5.5 0 0 0-.327.596zm2.357-.785l.447-.224a.5.5 0 0 0-.605-.25zm4.714 9.428l-.447.224a.5.5 0 0 0 .705.205zM13 9.857l.257.429a.5.5 0 0 0 .165-.697zm-2.75-4.321l-.121-.485a.5.5 0 0 0-.3.753zm1.571-.393l.4-.3a.5.5 0 0 0-.52-.185zM13 6.714l.158.475a.5.5 0 0 0 .242-.775zM3.571 9.857l-.485.121a.5.5 0 0 0 .644.354zM2.158 4.046l2.357-.786l-.316-.949l-2.357.786zM3.91 3.009l2.918 5.837l.895-.447l-2.919-5.837zm2.918 5.837l1.796 3.592l.895-.447l-1.796-3.592zm2.5 3.797l3.93-2.357l-.515-.858l-3.929 2.358zm4.094-3.054l-1.65-2.593l-.844.537l1.65 2.593zm-1.65-2.593l-1.1-1.729l-.844.537l1.1 1.729zm-1.4-.975l1.57-.393l-.242-.97l-1.571.393zm1.05-.578L12.6 7.014l.8-.6l-1.179-1.571zm1.42.797l-1.65.55l.316.949l1.65-.55zm-1.65.55L7.117 8.148l.317.949l4.074-1.358zM7.117 8.148L3.413 9.383l.317.949l3.704-1.235zm-3.06 1.588L2.484 3.45l-.97.243l1.571 6.285zM2.5 1h10V0h-10zM14 2.5v10h1v-10zM12.5 14h-10v1h10zM1 12.5v-10H0v10zM2.5 14A1.5 1.5 0 0 1 1 12.5H0A2.5 2.5 0 0 0 2.5 15zM14 12.5a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM12.5 1A1.5 1.5 0 0 1 14 2.5h1A2.5 2.5 0 0 0 12.5 0zm-10-1A2.5 2.5 0 0 0 0 2.5h1A1.5 1.5 0 0 1 2.5 1z"></svg:path>`,
})
export class TeenyiconsLaravelOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLaravelSolidIcon],svg[teenyicons-laravel-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.104 3.397L6.57 8.33l-2.645.882L2.597 3.9zm5.173 8.111L7.981 8.915l3.157-1.053l1.165 1.83zm2.907-5.048l-.622.207l-.518-.814l.577-.145z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 2.5A2.5 2.5 0 0 1 2.5 0h10A2.5 2.5 0 0 1 15 2.5v10a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 0 12.5zm4.804.062a.5.5 0 0 0-.605-.25l-2.357.785a.5.5 0 0 0-.327.596l1.571 6.285a.5.5 0 0 0 .644.354l3.292-1.098l1.602 3.204a.5.5 0 0 0 .705.205l3.928-2.357a.5.5 0 0 0 .165-.697l-1.306-2.053l1.042-.347a.5.5 0 0 0 .242-.775l-1.178-1.571a.5.5 0 0 0-.522-.185l-1.571.393a.5.5 0 0 0-.3.753l.755 1.188L7.53 8.011z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLaravelSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersDifferenceOutlineIcon],svg[teenyicons-layers-difference-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 4.5v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3m-6-6h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3m-6-6V7m0-2.5H7m3.5 6H8m2.5 0V8M8 4.5h2.5V7m-6 1v2.5H7"></svg:path>`,
})
export class TeenyiconsLayersDifferenceOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersDifferenceSolidIcon],svg[teenyicons-layers-difference-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4V1.5A1.5 1.5 0 0 1 5.5 0h8A1.5 1.5 0 0 1 15 1.5v8a1.5 1.5 0 0 1-1.5 1.5H11v2.5A1.5 1.5 0 0 1 9.5 15h-8A1.5 1.5 0 0 1 0 13.5v-8A1.5 1.5 0 0 1 1.5 4zm6 1v5H5V5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLayersDifferenceSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersIntersectOutlineIcon],svg[teenyicons-layers-intersect-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 3V1.5a1 1 0 0 1 1-1H7m5 0h1.5a1 1 0 0 1 1 1V3M8 .5h3m1 10h1.5a1 1 0 0 0 1-1V8m0-4v3M3 4.5H1.5a1 1 0 0 0-1 1V7m0 5v1.5a1 1 0 0 0 1 1H3M.5 8v3M8 14.5h1.5a1 1 0 0 0 1-1V12M4 14.5h3m-2.5-10v6h6v-6z"></svg:path>`,
})
export class TeenyiconsLayersIntersectOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersIntersectSolidIcon],svg[teenyicons-layers-intersect-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.5V4H1.5A1.5 1.5 0 0 0 0 5.5v8A1.5 1.5 0 0 0 1.5 15h8a1.5 1.5 0 0 0 1.5-1.5V11h2.5A1.5 1.5 0 0 0 15 9.5v-8A1.5 1.5 0 0 0 13.5 0h-8A1.5 1.5 0 0 0 4 1.5M5.5 1a.5.5 0 0 0-.5.5V4h4.5A1.5 1.5 0 0 1 11 5.5V10h2.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm0 10A1.5 1.5 0 0 1 4 9.5V5H1.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V11z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLayersIntersectSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersOutlineIcon],svg[teenyicons-layers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 1.5l.197-.46a.5.5 0 0 0-.394 0zm-7 3l-.197-.46a.5.5 0 0 0 0 .92zm7 3l-.197.46a.5.5 0 0 0 .394 0zm7-3l.197.46a.5.5 0 0 0 0-.92zm-7 6l-.197.46l.197.084l.197-.084zm0 3l-.197.46l.197.084l.197-.084zM7.303 1.04l-7 3l.394.92l7-3zm-7 3.92l7 3l.394-.92l-7-3zm7.394 3l7-3l-.394-.92l-7 3zm7-3.92l-7-3l-.394.92l7 3zM.303 7.96l7 3l.394-.92l-7-3zm7.394 3l7-3l-.394-.92l-7 3zm-7.394 0l7 3l.394-.92l-7-3zm7.394 3l7-3l-.394-.92l-7 3z"></svg:path>`,
})
export class TeenyiconsLayersOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersSolidIcon],svg[teenyicons-layers-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.697 1.04a.5.5 0 0 0-.394 0l-7 3a.5.5 0 0 0 0 .92l7 3a.5.5 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.92z"></svg:path><svg:path fill="currentColor" d="M7.5 9.956L.697 7.04l-.394.92L7.5 11.044l7.197-3.084l-.394-.92z"></svg:path><svg:path fill="currentColor" d="m.697 10.04l-.394.92L7.5 14.044l7.197-3.084l-.394-.92L7.5 12.956z"></svg:path>`,
})
export class TeenyiconsLayersSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersSubtractOutlineIcon],svg[teenyicons-layers-subtract-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.5 10.5v3a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3m0-3v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1Z"></svg:path>`,
})
export class TeenyiconsLayersSubtractOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersSubtractSolidIcon],svg[teenyicons-layers-subtract-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4H1.5A1.5 1.5 0 0 0 0 5.5v8A1.5 1.5 0 0 0 1.5 15h8a1.5 1.5 0 0 0 1.5-1.5V11h2.5A1.5 1.5 0 0 0 15 9.5v-8A1.5 1.5 0 0 0 13.5 0h-8A1.5 1.5 0 0 0 4 1.5zm1-2.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLayersSubtractSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersUnionOutlineIcon],svg[teenyicons-layers-union-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 1.5v3h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1Z"></svg:path>`,
})
export class TeenyiconsLayersUnionOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersUnionSolidIcon],svg[teenyicons-layers-union-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 0A1.5 1.5 0 0 0 4 1.5V4H1.5A1.5 1.5 0 0 0 0 5.5v8A1.5 1.5 0 0 0 1.5 15h8a1.5 1.5 0 0 0 1.5-1.5V11h2.5A1.5 1.5 0 0 0 15 9.5v-8A1.5 1.5 0 0 0 13.5 0z"></svg:path>`,
})
export class TeenyiconsLayersUnionSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLeftCircleOutlineIcon],svg[teenyicons-left-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.854 4.854l.353-.354l-.707-.707l-.354.353zM5.5 7.5l-.354-.354l-.353.354l.353.354zm2.646 3.354l.354.353l.707-.707l-.353-.354zm0-6.708l-3 3l.708.708l3-3zm-3 3.708l3 3l.708-.708l-3-3zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1z"></svg:path>`,
})
export class TeenyiconsLeftCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLeftCircleSolidIcon],svg[teenyicons-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m9 4.207L4.793 7.5L9 3.293z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLeftCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLeftOutlineIcon],svg[teenyicons-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="M10 14L3 7.5L10 1"></svg:path>`,
})
export class TeenyiconsLeftOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLeftSmallOutlineIcon],svg[teenyicons-left-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="m8.5 4.5l-3 3l3 3"></svg:path>`,
})
export class TeenyiconsLeftSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLeftSmallSolidIcon],svg[teenyicons-left-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.793 7.5L9 11.707V3.293z"></svg:path>`,
})
export class TeenyiconsLeftSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLeftSolidIcon],svg[teenyicons-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5L11 0v15z"></svg:path>`,
})
export class TeenyiconsLeftSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLegoOutlineIcon],svg[teenyicons-lego-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3h8V2h-8zM13 4.5v8h1v-8zM11.5 14h-8v1h8zM2 12.5v-8H1v8zM3.5 14A1.5 1.5 0 0 1 2 12.5H1A2.5 2.5 0 0 0 3.5 15zm9.5-1.5a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM11.5 3A1.5 1.5 0 0 1 13 4.5h1A2.5 2.5 0 0 0 11.5 2zm-8-1A2.5 2.5 0 0 0 1 4.5h1A1.5 1.5 0 0 1 3.5 3zM5 8h1V7H5zm4 0h1V7H9zm1.1 1.7a3.25 3.25 0 0 1-5.2 0l-.8.6c1.7 2.267 5.1 2.267 6.8 0zM5 2.5v-1H4v1zM5.5 1h4V0h-4zm4.5.5v1h1v-1zM9.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 9.5 0zM5 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 4 1.5z"></svg:path>`,
})
export class TeenyiconsLegoOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLegoSolidIcon],svg[teenyicons-lego-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.5A1.5 1.5 0 0 1 5.5 0h4A1.5 1.5 0 0 1 11 1.5V2h.5A2.5 2.5 0 0 1 14 4.5v8a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 1 12.5v-8A2.5 2.5 0 0 1 3.5 2H4zM5 7v1h1V7zm4 0v1h1V7zM4.9 9.7a3.25 3.25 0 0 0 5.2 0l.8.6c-1.7 2.267-5.1 2.267-6.8 0z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLegoSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLifebuoyOutlineIcon],svg[teenyicons-lifebuoy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.329 10.328a4 4 0 0 1-5.657 0m5.657 0a4 4 0 0 0 0-5.656m0 5.656l2.12 2.122m-7.777-2.122a4 4 0 0 1 0-5.656m0 5.656L2.55 12.45m7.779-7.778a4 4 0 0 0-5.657 0m5.657 0l2.12-2.122M4.673 4.672L2.55 2.55m9.9 9.9a7 7 0 0 1-9.9 0m9.9 0a7 7 0 0 0 0-9.9m-9.9 9.9a7 7 0 0 1 0-9.9m9.9 0a7 7 0 0 0-9.9 0"></svg:path>`,
})
export class TeenyiconsLifebuoyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLifebuoySolidIcon],svg[teenyicons-lifebuoy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.404 4.697L2.562 1.855a7.5 7.5 0 0 1 9.876 0L9.596 4.697a3.5 3.5 0 0 0-4.192 0m4.899.707a3.5 3.5 0 0 1 0 4.192l2.842 2.842a7.5 7.5 0 0 0 0-9.876zm-.707 4.899a3.5 3.5 0 0 1-4.192 0l-2.842 2.842a7.5 7.5 0 0 0 9.876 0zM4.697 5.404a3.5 3.5 0 0 0 0 4.192l-2.842 2.842a7.5 7.5 0 0 1 0-9.876z"></svg:path>`,
})
export class TeenyiconsLifebuoySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLightningCableOutlineIcon],svg[teenyicons-lightning-cable-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 5.5h6m-6 0a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-6 0v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4M9 2.5H6M5.5 13v2m4-2v2"></svg:path>`,
})
export class TeenyiconsLightningCableOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLightningCableSolidIcon],svg[teenyicons-lightning-cable-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 0A1.5 1.5 0 0 0 4 1.5V5h7V1.5A1.5 1.5 0 0 0 9.5 0zM6 2h3v1H6z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3 6h9v5.5a1.5 1.5 0 0 1-1.5 1.5H10v2H9v-2H6v2H5v-2h-.5A1.5 1.5 0 0 1 3 11.5z"></svg:path>`,
})
export class TeenyiconsLightningCableSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLineOutlineIcon],svg[teenyicons-line-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m2 2l11 11M1.5 2.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm12 12a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"></svg:path>`,
})
export class TeenyiconsLineOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLineSolidIcon],svg[teenyicons-line-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0a1.5 1.5 0 1 0 .647 2.854l10 10a1.5 1.5 0 1 0 .707-.707l-10-10A1.5 1.5 0 0 0 1.5 0"></svg:path>`,
})
export class TeenyiconsLineSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinkOutlineIcon],svg[teenyicons-link-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 6.5L1.328 9.672a2.828 2.828 0 1 0 4 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 0 0-4-4L6.5 4.5m-2 6l6-6"></svg:path>`,
})
export class TeenyiconsLinkOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinkRemoveOutlineIcon],svg[teenyicons-link-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 6.5L1.328 9.672a2.828 2.828 0 1 0 4 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 0 0-4-4L6.5 4.5m-2 6l6-6M3 4.5H0M4.5 0v3m6 9v3m1.5-4.5h3"></svg:path>`,
})
export class TeenyiconsLinkRemoveOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinkRemoveSolidIcon],svg[teenyicons-link-remove-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3V0h1v3zM9.318.975a3.328 3.328 0 1 1 4.707 4.707l-3.171 3.172l-.708-.708l3.172-3.171a2.328 2.328 0 1 0-3.293-3.293L6.854 4.854l-.708-.708zM0 4h3v1H0zm10.854.854l-6 6l-.708-.708l6-6zm-6 2l-3.172 3.171a2.329 2.329 0 0 0 3.293 3.293l3.171-3.172l.708.708l-3.172 3.171A3.328 3.328 0 1 1 .975 9.318l3.171-3.172zM15 11h-3v-1h3zm-5 4v-3h1v3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLinkRemoveSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinkSolidIcon],svg[teenyicons-link-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.318.975a3.328 3.328 0 1 1 4.707 4.707l-3.171 3.172l-.708-.708l3.172-3.171a2.328 2.328 0 1 0-3.293-3.293L6.854 4.854l-.708-.708zm1.536 3.879l-6 6l-.708-.708l6-6zm-6 2l-3.172 3.171a2.329 2.329 0 0 0 3.293 3.293l3.171-3.172l.708.708l-3.172 3.171A3.328 3.328 0 1 1 .975 9.318l3.171-3.172z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLinkSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinkedinOutlineIcon],svg[teenyicons-linkedin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 6v5m6 0V8.5a2 2 0 1 0-4 0V11V6M4 4.5h1M1.5.5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsLinkedinOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinkedinSolidIcon],svg[teenyicons-linkedin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5zM5 5H4V4h1zm-1 6V6h1v5zm4.5-4A1.5 1.5 0 0 0 7 8.5V11H6V6h1v.5a2.5 2.5 0 0 1 4 2V11h-1V8.5A1.5 1.5 0 0 0 8.5 7" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLinkedinSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinuxAltOutlineIcon],svg[teenyicons-linux-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 9.662c0-.758.224-1.498.645-2.129l.565-.847a7.2 7.2 0 0 0 1.07-2.583l.328-1.642a2.44 2.44 0 0 1 4.784 0l.329 1.642a7.2 7.2 0 0 0 1.07 2.583l.564.847c.42.63.645 1.371.645 2.129m-7.392 3.637c.386.13.8.201 1.23.201h2.324c.43 0 .844-.07 1.23-.201M6.5 5.5L4.947 8.606a2 2 0 0 0 1.79 2.894h1.527a2 2 0 0 0 1.789-2.894L8.5 5.5M6.5 3v1.5m2-1.5v1.5m-1.894-.053L5.5 5l.586.586a2 2 0 0 0 2.828 0L9.5 5l-1.106-.553a2 2 0 0 0-1.788 0ZM.77 11.326l.479-1.197a1 1 0 0 1 .928-.629h1.164a1 1 0 0 1 .919.606l.93 2.172a1 1 0 0 1-.319 1.194l-.738.553a1 1 0 0 1-1.24-.031l-1.835-1.529a1 1 0 0 1-.288-1.14Zm13.46 0l-.479-1.197a1 1 0 0 0-.928-.629h-1.164a1 1 0 0 0-.919.606l-.93 2.172a1 1 0 0 0 .319 1.194l.738.553a1 1 0 0 0 1.24-.031l1.835-1.529a1 1 0 0 0 .288-1.14Z"></svg:path>`,
})
export class TeenyiconsLinuxAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinuxAltSolidIcon],svg[teenyicons-linux-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.54 2.407A3.01 3.01 0 0 1 7.5 0a3.01 3.01 0 0 1 2.96 2.407l.338 1.672a6.8 6.8 0 0 0 1.022 2.449l.58.863c.363.539.6 1.148.698 1.782a1.54 1.54 0 0 1 1.3.955l.492 1.22a1.52 1.52 0 0 1-.445 1.74l-1.884 1.558a1.55 1.55 0 0 1-1.91.048l-.76-.564l-.029-.023q-.56.152-1.168.154H6.306q-.608-.001-1.168-.154l-.03.023l-.759.564a1.55 1.55 0 0 1-1.91-.048L.554 13.089a1.52 1.52 0 0 1-.444-1.742l.492-1.219a1.54 1.54 0 0 1 1.3-.955a4.4 4.4 0 0 1 .697-1.782l.58-.863a6.8 6.8 0 0 0 1.023-2.449zm6.305 7.069a1.53 1.53 0 0 0-.489.618l-.768 1.777a2.6 2.6 0 0 1-1.303.353h-1.57c-.467 0-.915-.126-1.303-.353l-.768-1.777a1.5 1.5 0 0 0-.489-.618c.026-.322.114-.641.264-.938l1.258-2.495l.007.007a2.583 2.583 0 0 0 3.632 0l.007-.007l1.258 2.495c.15.297.238.616.264.938M9.04 4.269V3.056H8.014v.801q.328.066.634.218zm-2.055-.412v-.801H5.96v1.213l.393-.194q.306-.152.634-.218m-4.953 6.33a.51.51 0 0 0-.477.32l-.492 1.219a.51.51 0 0 0 .148.58l1.884 1.557a.52.52 0 0 0 .637.017l.759-.565a.51.51 0 0 0 .164-.608L3.7 10.495a.51.51 0 0 0-.472-.309zm11.411.32a.51.51 0 0 0-.477-.32h-1.195a.51.51 0 0 0-.472.308l-.956 2.212a.51.51 0 0 0 .164.608l.759.565c.19.141.454.134.637-.017l1.884-1.557a.51.51 0 0 0 .148-.58zM6.811 4.986a1.55 1.55 0 0 1 1.378 0l.498.247l-.097.097a1.55 1.55 0 0 1-2.18 0l-.097-.097z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLinuxAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinuxOutlineIcon],svg[teenyicons-linux-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 14.5l-.354-.354A.5.5 0 0 0 .5 15zm.656-.656l-.353-.354zM14.5 14.5v.5a.5.5 0 0 0 .354-.854zm-11-4l-.224-.447a.5.5 0 0 0-.13.8zm.87-.435l.223.447zm6.26 0l-.223.447zm.87.435l.354.354a.5.5 0 0 0-.13-.801zm-7.414.586l.353-.354zM.854 14.854l.656-.657l-.707-.707l-.657.656zM2 13.014V6.5H1v6.514zM13 6.5v6.514h1V6.5zm.49 7.697l.656.657l.708-.708l-.657-.656zM14.5 14H.5v1h14zm-1.5-.986c0 .444.176.87.49 1.183l.707-.707a.67.67 0 0 1-.197-.476zM7.5 1A5.5 5.5 0 0 1 13 6.5h1A6.5 6.5 0 0 0 7.5 0zM2 6.5A5.5 5.5 0 0 1 7.5 1V0A6.5 6.5 0 0 0 1 6.5zm-.49 7.697c.314-.314.49-.74.49-1.183H1c0 .179-.07.35-.197.476zm2.214-3.25l.87-.434l-.448-.895l-.87.435zm6.683-.434l.87.434l.447-.894l-.87-.435zm.74-.367l-.586.586l.707.707l.586-.585zm-6.708.586l-.585-.586l-.708.708l.586.585zM7.5 12a4.33 4.33 0 0 1-3.06-1.268l-.708.707c1 1 2.355 1.561 3.768 1.561zm3.06-1.268A4.33 4.33 0 0 1 7.5 12v1a5.33 5.33 0 0 0 3.768-1.56zm-5.967-.22a6.5 6.5 0 0 1 5.814 0l.447-.894a7.5 7.5 0 0 0-6.708 0zM7 6.5v1h1v-1zm-3 1v-1H3v1zM5.5 9A1.5 1.5 0 0 1 4 7.5H3A2.5 2.5 0 0 0 5.5 10zM7 7.5A1.5 1.5 0 0 1 5.5 9v1A2.5 2.5 0 0 0 8 7.5zM5.5 5A1.5 1.5 0 0 1 7 6.5h1A2.5 2.5 0 0 0 5.5 4zm0-1A2.5 2.5 0 0 0 3 6.5h1A1.5 1.5 0 0 1 5.5 5zM11 6.5v1h1v-1zM9.5 9A1.5 1.5 0 0 1 8 7.5H7A2.5 2.5 0 0 0 9.5 10zM11 7.5A1.5 1.5 0 0 1 9.5 9v1A2.5 2.5 0 0 0 12 7.5zM9.5 5A1.5 1.5 0 0 1 11 6.5h1A2.5 2.5 0 0 0 9.5 4zm0-1A2.5 2.5 0 0 0 7 6.5h1A1.5 1.5 0 0 1 9.5 5zM5 7v1h1V7zm4 0v1h1V7z"></svg:path>`,
})
export class TeenyiconsLinuxOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinuxSolidIcon],svg[teenyicons-linux-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8V7h1v1zm4 0V7h1v1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 6.5a6.5 6.5 0 0 1 13 0v6.514c0 .179.07.35.197.476l.657.656A.5.5 0 0 1 14.5 15H.5a.5.5 0 0 1-.354-.854l.657-.656A.67.67 0 0 0 1 13.014zm3 0a1.5 1.5 0 1 1 3 0v1a1.5 1.5 0 1 1-3 0zm4 0a1.5 1.5 0 1 1 3 0v1a1.5 1.5 0 0 1-3 0zm-3.407 4.012a6.5 6.5 0 0 1 5.814 0l.249.125l-.095.095a4.33 4.33 0 0 1-6.122 0l-.095-.095z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLinuxSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsListLayoutOutlineIcon],svg[teenyicons-list-layout-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7 3.5h8m-8 8h8M1.5 1.5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsListLayoutOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsListLayoutSolidIcon],svg[teenyicons-list-layout-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 1A1.5 1.5 0 0 0 0 2.5v2A1.5 1.5 0 0 0 1.5 6h2A1.5 1.5 0 0 0 5 4.5v-2A1.5 1.5 0 0 0 3.5 1zM7 4h8V3H7zM1.5 9A1.5 1.5 0 0 0 0 10.5v2A1.5 1.5 0 0 0 1.5 14h2A1.5 1.5 0 0 0 5 12.5v-2A1.5 1.5 0 0 0 3.5 9zM7 12h8v-1H7z"></svg:path>`,
})
export class TeenyiconsListLayoutSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsListOrderedOutlineIcon],svg[teenyicons-list-ordered-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 13.5l-.354-.354A.5.5 0 0 0 .5 14zm1-11H2V2h-.5zM5 8h10V7H5zm0-4h10V3H5zm0 8h10v-1H5zm-2 1H.5v1H3zm-2.146.854l1.792-1.793l-.707-.707l-1.793 1.792zM1.793 10H1.5v1h.293zM1.5 10A1.5 1.5 0 0 0 0 11.5h1a.5.5 0 0 1 .5-.5zM3 11.207C3 10.54 2.46 10 1.793 10v1c.114 0 .207.093.207.207zm-.354.854c.227-.227.354-.534.354-.854H2a.2.2 0 0 1-.06.147zM0 6h3V5H0zm2-.5v-3H1v3zM1.5 2H0v1h1.5z"></svg:path>`,
})
export class TeenyiconsListOrderedOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsListOrderedSolidIcon],svg[teenyicons-list-ordered-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2h2v3h1v1H0V5h1V3H0zm15 2H5V3h10zm0 4H5V7h10zM0 11.5A1.5 1.5 0 0 1 1.5 10h.293a1.207 1.207 0 0 1 .853 2.06l-.939.94H3v1H.5a.5.5 0 0 1-.354-.854l1.793-1.792A.207.207 0 0 0 1.793 11H1.5a.5.5 0 0 0-.5.5zm15 .5H5v-1h10z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsListOrderedSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsListUnorderedOutlineIcon],svg[teenyicons-list-unordered-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 7.5h11m-15 0h2m2-4h11m-15 0h2m2 8h11m-15 0h2"></svg:path>`,
})
export class TeenyiconsListUnorderedOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsListUnorderedSolidIcon],svg[teenyicons-list-unordered-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4H0V3h2zm13 0H4V3h11zM2 8H0V7h2zm13 0H4V7h11zM2 12H0v-1h2zm13 0H4v-1h11z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsListUnorderedSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLitecoinOutlineIcon],svg[teenyicons-litecoin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m5.5 1.5l-3 12H13m-12-5l6-3"></svg:path>`,
})
export class TeenyiconsLitecoinOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLitecoinSolidIcon],svg[teenyicons-litecoin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.714 6.584l1.3-5.205l.971.242l-1.093 4.374l1.884-.942l.448.894l-2.652 1.326L3.14 13H13v1H1.86l1.534-6.138l-2.17 1.085l-.448-.894z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLitecoinSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLoaderOutlineIcon],svg[teenyicons-loader-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1V.5H7V1zM7 4.5V5h1v-.5zm1 6V10H7v.5zM7 14v.5h1V14zM4.5 7.995H5v-1h-.5zm-3.5-1H.5v1H1zM14 8h.5V7H14zm-3.5-1.005H10v1h.5zM7 1v3.5h1V1zm0 9.5V14h1v-3.5zM4.5 6.995H1v1h3.5zM14 7l-3.5-.005v1L14 8zM2.147 2.854l3 3l.708-.708l-3-3zm10-.708l-3 3l.708.708l3-3zM2.854 12.854l3-3l-.708-.708l-3 3zm6.292-3l3 3l.708-.708l-3-3z"></svg:path>`,
})
export class TeenyiconsLoaderOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLoaderSolidIcon],svg[teenyicons-loader-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 .5V5H7V.5zM5.146 5.854l-3-3l.708-.708l3 3zm4-.708l3-3l.708.708l-3 3zm.855 1.849L14.5 7l-.002 1l-4.5-.006zm-9.501 0H5v1H.5zm5.354 2.859l-3 3l-.708-.708l3-3zm6.292 3l-3-3l.708-.708l3 3zM8 10v4.5H7V10z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLoaderSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLocationOutlineIcon],svg[teenyicons-location-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="M7.5.5v14m7-7.005H.5m13 0a6.006 6.006 0 0 1-6 6.005c-3.313 0-6-2.694-6-6.005a6 6 0 0 1 6-5.996a6 6 0 0 1 6 5.996Z"></svg:path>`,
})
export class TeenyiconsLocationOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLocationSolidIcon],svg[teenyicons-location-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.018V0H7v1.018a6.5 6.5 0 0 0-5.981 5.977H0v1h1.019A6.51 6.51 0 0 0 7 13.981V15h1v-1.019a6.51 6.51 0 0 0 5.981-5.986H15v-1h-1.019A6.5 6.5 0 0 0 8 1.018M8 3v3.995h4v1H8V12H7V7.995H3v-1h4V3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLocationSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLockCircleOutlineIcon],svg[teenyicons-lock-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7h4V6h-4zm4.5.5v3h1v-3zM9.5 11h-4v1h4zM5 10.5v-3H4v3zm.5.5a.5.5 0 0 1-.5-.5H4A1.5 1.5 0 0 0 5.5 12zm4.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM9.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 9.5 6zm-4-1A1.5 1.5 0 0 0 4 7.5h1a.5.5 0 0 1 .5-.5zm.5.5v-1H5v1zm3-1v1h1v-1zM7.5 4A1.5 1.5 0 0 1 9 5.5h1A2.5 2.5 0 0 0 7.5 3zM6 5.5A1.5 1.5 0 0 1 7.5 4V3A2.5 2.5 0 0 0 5 5.5zm-5 2A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zm1 0A7.5 7.5 0 0 0 7.5 0v1A6.5 6.5 0 0 1 14 7.5z"></svg:path>`,
})
export class TeenyiconsLockCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLockCircleSolidIcon],svg[teenyicons-lock-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4A1.5 1.5 0 0 0 6 5.5V6h3v-.5A1.5 1.5 0 0 0 7.5 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 0a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15M5 5.5v.585A1.5 1.5 0 0 0 4 7.5v3A1.5 1.5 0 0 0 5.5 12h4a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1-1.415V5.5a2.5 2.5 0 0 0-5 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLockCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLockOutlineIcon],svg[teenyicons-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 6.5v-3a3 3 0 0 1 6 0v3m-8 0h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsLockOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLockSmallOutlineIcon],svg[teenyicons-lock-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7h4V6h-4zm4.5.5v3h1v-3zM9.5 11h-4v1h4zM5 10.5v-3H4v3zm.5.5a.5.5 0 0 1-.5-.5H4A1.5 1.5 0 0 0 5.5 12zm4.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM9.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 9.5 6zm-4-1A1.5 1.5 0 0 0 4 7.5h1a.5.5 0 0 1 .5-.5zm.5.5v-1H5v1zm3-1v1h1v-1zM7.5 4A1.5 1.5 0 0 1 9 5.5h1A2.5 2.5 0 0 0 7.5 3zM6 5.5A1.5 1.5 0 0 1 7.5 4V3A2.5 2.5 0 0 0 5 5.5z"></svg:path>`,
})
export class TeenyiconsLockSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLockSmallSolidIcon],svg[teenyicons-lock-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 5.5v.585A1.5 1.5 0 0 1 11 7.5v3A1.5 1.5 0 0 1 9.5 12h-4A1.5 1.5 0 0 1 4 10.5v-3a1.5 1.5 0 0 1 1-1.415V5.5a2.5 2.5 0 0 1 5 0m-4 0a1.5 1.5 0 1 1 3 0V6H6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLockSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLockSolidIcon],svg[teenyicons-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3.5V6h1.5A1.5 1.5 0 0 1 14 7.5v6a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5v-6A1.5 1.5 0 0 1 2.5 6H4V3.5a3.5 3.5 0 1 1 7 0m-6 0a2.5 2.5 0 0 1 5 0V6H5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLockSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLogoutOutlineIcon],svg[teenyicons-logout-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m13.5 7.5l-3 3.25m3-3.25l-3-3m3 3H4m4 6H1.5v-12H8"></svg:path>`,
})
export class TeenyiconsLogoutOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLogoutSolidIcon],svg[teenyicons-logout-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h7v1H2v11h6v1H1zm9.854 3.146l3.34 3.34l-3.327 3.603l-.734-.678L12.358 8H4V7h8.293l-2.147-2.146z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLogoutSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLoopOutlineIcon],svg[teenyicons-loop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 3.5l.354.354a.5.5 0 0 0 0-.708zm-14 8l-.354-.354a.5.5 0 0 0 0 .708zM11.146.854l3 3l.708-.708l-3-3zm3 2.292l-3 3l.708.708l3-3zm-10.292 11l-3-3l-.708.708l3 3zm-3-2.292l3-3l-.708-.708l-3 3zM.5 12h11v-1H.5zM15 8.5V7h-1v1.5zM11.5 12A3.5 3.5 0 0 0 15 8.5h-1a2.5 2.5 0 0 1-2.5 2.5zm3-9h-11v1h11zM0 6.5V8h1V6.5zM3.5 3A3.5 3.5 0 0 0 0 6.5h1A2.5 2.5 0 0 1 3.5 4z"></svg:path>`,
})
export class TeenyiconsLoopOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLoopSolidIcon],svg[teenyicons-loop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.293 3L11.146.854l.708-.708l3 3a.5.5 0 0 1 0 .708l-3 3l-.708-.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5V8H0V6.5A3.5 3.5 0 0 1 3.5 3zM15 7v1.5a3.5 3.5 0 0 1-3.5 3.5H1.707l2.147 2.146l-.708.708l-3-3a.5.5 0 0 1 0-.707l3-3l.708.707L1.707 11H11.5A2.5 2.5 0 0 0 14 8.5V7z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLoopSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMagsafeOutlineIcon],svg[teenyicons-magsafe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 2.5v-2h8v2m-6 9V15m4-3.5V15m-5-5.5v2h6v-2m-9-7h12v7h-12z"></svg:path>`,
})
export class TeenyiconsMagsafeOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMagsafeSolidIcon],svg[teenyicons-magsafe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0H3v3h9zm2 4H1v6h3v2h1v3h1v-3h3v3h1v-3h1v-2h3z"></svg:path>`,
})
export class TeenyiconsMagsafeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMarkdownOutlineIcon],svg[teenyicons-markdown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 5.5l.354-.354A.5.5 0 0 0 2 5.5zm2 2l-.354.354l.354.353l.354-.353zm2-2H7a.5.5 0 0 0-.854-.354zm4 4l-.354.354l.354.353l.354-.353zM1.5 3h12V2h-12zm12.5.5v8h1v-8zm-.5 8.5h-12v1h12zM1 11.5v-8H0v8zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 13zm12.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM13.5 3a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 2zm-12-1A1.5 1.5 0 0 0 0 3.5h1a.5.5 0 0 1 .5-.5zM3 10V5.5H2V10zm-.854-4.146l2 2l.708-.708l-2-2zm2.708 2l2-2l-.708-.708l-2 2zM6 5.5V10h1V5.5zm4-.5v4.5h1V5zM8.146 7.854l2 2l.708-.708l-2-2zm2.708 2l2-2l-.708-.708l-2 2z"></svg:path>`,
})
export class TeenyiconsMarkdownOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMarkdownSolidIcon],svg[teenyicons-markdown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5zM10 5v3.293L8.854 7.146l-.708.708l2 2a.5.5 0 0 0 .708 0l2-2l-.707-.708L11 8.293V5zm-7.146.146A.5.5 0 0 0 2 5.5V10h1V6.707l1.5 1.5l1.5-1.5V10h1V5.5a.5.5 0 0 0-.854-.354L4.5 6.793z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMarkdownSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMediumOutlineIcon],svg[teenyicons-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m4.5 4.5l3 4l3-4m-6 0H3m1.5 0V11m6-6.5H12m-1.5 0V11M3 10.5h3m3 0h3M1.5.5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsMediumOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMediumSolidIcon],svg[teenyicons-medium-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5zM4 5H3V4h1.5a.5.5 0 0 1 .4.2l2.6 3.467l2.593-3.458A.5.5 0 0 1 10.5 4H12v1h-1v5h1v1H9v-1h1V6L7.5 9.333L5 6v4h1v1H3v-1h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMediumSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMenuOutlineIcon],svg[teenyicons-menu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 5.5h15m-15-4h15m-15 8h15m-15 4h15"></svg:path>`,
})
export class TeenyiconsMenuOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMenuSolidIcon],svg[teenyicons-menu-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 2H0V1h15zm0 4H0V5h15zm0 4H0V9h15zm0 4H0v-1h15z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMenuSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageMinusOutlineIcon],svg[teenyicons-message-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.5 11.493l.416-.278a.5.5 0 0 0-.416-.222zm2 2.998l-.416.277a.5.5 0 0 0 .832 0zm2-2.998v-.5a.5.5 0 0 0-.416.222zm-4.416.277l2 2.998l.832-.555l-2-2.998zm2.832 2.998l2-2.998l-.832-.555l-2 2.998zM9.5 11.993h4v-1h-4zm4 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5zm1.5-1.5V1.5h-1v8.994zM15 1.5c0-.83-.671-1.5-1.5-1.5v1c.277 0 .5.223.5.5zM13.5 0h-12v1h12zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5zM0 1.5v8.994h1V1.499zm0 8.994c0 .829.671 1.499 1.5 1.499v-1a.5.5 0 0 1-.5-.5zm1.5 1.499h4v-1h-4zM5 7h5V6H5z"></svg:path>`,
})
export class TeenyiconsMessageMinusOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageMinusSolidIcon],svg[teenyicons-message-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H9.768l-1.852 2.775a.5.5 0 0 1-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5zM5 7h5V6H5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessageMinusSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageNoAccessOutlineIcon],svg[teenyicons-message-no-access-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.5 11.493l.416-.278a.5.5 0 0 0-.416-.222zm2 2.998l-.416.277a.5.5 0 0 0 .832 0zm2-2.998v-.5a.5.5 0 0 0-.416.222zm-4.416.277l2 2.998l.832-.555l-2-2.998zm2.832 2.998l2-2.998l-.832-.555l-2 2.998zM9.5 11.993h4v-1h-4zm4 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5zm1.5-1.5V1.5h-1v8.994zM15 1.5c0-.83-.671-1.5-1.5-1.5v1c.277 0 .5.223.5.5zM13.5 0h-12v1h12zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5zM0 1.5v8.994h1V1.499zm0 8.994c0 .829.671 1.499 1.5 1.499v-1a.5.5 0 0 1-.5-.5zm1.5 1.499h4v-1h-4zM7.5 9A2.5 2.5 0 0 1 5 6.5H4A3.5 3.5 0 0 0 7.5 10zM10 6.5A2.5 2.5 0 0 1 7.5 9v1A3.5 3.5 0 0 0 11 6.5zM7.5 4A2.5 2.5 0 0 1 10 6.5h1A3.5 3.5 0 0 0 7.5 3zm0-1A3.5 3.5 0 0 0 4 6.5h1A2.5 2.5 0 0 1 7.5 4zm1.646 1.146l-4 4l.708.708l4-4z"></svg:path>`,
})
export class TeenyiconsMessageNoAccessOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageNoAccessSolidIcon],svg[teenyicons-message-no-access-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4a2.5 2.5 0 0 0-2.086 3.879L8.88 4.414A2.5 2.5 0 0 0 7.5 4m0 5c-.51 0-.983-.152-1.379-.414L9.586 5.12A2.5 2.5 0 0 1 7.5 9"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H9.768l-1.852 2.775a.5.5 0 0 1-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5zm4 5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessageNoAccessSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageOutlineIcon],svg[teenyicons-message-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" d="m5.5 11.493l2 2.998l2-2.998h4a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-.999h-12a1 1 0 0 0-1 1v8.994c0 .552.447.999 1 .999z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessageOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessagePlusOutlineIcon],svg[teenyicons-message-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.5 11.493l.416-.278a.5.5 0 0 0-.416-.222zm2 2.998l-.416.277a.5.5 0 0 0 .832 0zm2-2.998v-.5a.5.5 0 0 0-.416.222zm-4.416.277l2 2.998l.832-.555l-2-2.998zm2.832 2.998l2-2.998l-.832-.555l-2 2.998zM9.5 11.993h4v-1h-4zm4 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5zm1.5-1.5V1.5h-1v8.994zM15 1.5c0-.83-.671-1.5-1.5-1.5v1c.277 0 .5.223.5.5zM13.5 0h-12v1h12zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5zM0 1.5v8.994h1V1.499zm0 8.994c0 .829.671 1.499 1.5 1.499v-1a.5.5 0 0 1-.5-.5zm1.5 1.499h4v-1h-4zM7 4v5h1V4zM5 7h5V6H5z"></svg:path>`,
})
export class TeenyiconsMessagePlusOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessagePlusSolidIcon],svg[teenyicons-message-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H9.768l-1.852 2.775a.5.5 0 0 1-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5zM7 9V7H5V6h2V4h1v2h2v1H8v2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessagePlusSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageSolidIcon],svg[teenyicons-message-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0C.671 0 0 .67 0 1.5v8.994c0 .829.671 1.499 1.5 1.499h3.733l1.851 2.775a.5.5 0 0 0 .832 0l1.851-2.775H13.5c.829 0 1.5-.67 1.5-1.5V1.5c0-.83-.671-1.5-1.5-1.5z"></svg:path>`,
})
export class TeenyiconsMessageSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageTextAltOutlineIcon],svg[teenyicons-message-text-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 11.493H4v-.5h-.5zm0 2.998H3a.5.5 0 0 0 .8.4zm4-2.998v-.5h-.167l-.133.1zm-3-7.496H4v1h.5zm6 1h.5v-1h-.5zm-6 1.998H4v1h.5zm4 1H9v-1h-.5zM3 11.493v2.998h1v-2.998zm.8 3.398l4-2.998l-.6-.8l-4 2.998zm3.7-2.898h6v-1h-6zm6 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5zm1.5-1.5V1.5h-1v8.994zM15 1.5c0-.83-.671-1.5-1.5-1.5v1c.277 0 .5.223.5.5zM13.5 0h-12v1h12zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5zM0 1.5v8.994h1V1.499zm0 8.994c0 .829.671 1.499 1.5 1.499v-1a.5.5 0 0 1-.5-.5zm1.5 1.499h2v-1h-2zm3-6.996h6v-1h-6zm0 2.998h4v-1h-4z"></svg:path>`,
})
export class TeenyiconsMessageTextAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageTextAltSolidIcon],svg[teenyicons-message-text-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H7.667L3.8 14.89a.5.5 0 0 1-.8-.4v-2.498H1.5c-.829 0-1.5-.67-1.5-1.5zm4 2.497h7v1H4zm0 2.998h5v1H4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessageTextAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageTextOutlineIcon],svg[teenyicons-message-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.5 11.493l.416-.278a.5.5 0 0 0-.416-.222zm2 2.998l-.416.277a.5.5 0 0 0 .832 0zm2-2.998v-.5a.5.5 0 0 0-.416.222zm-4.416.277l2 2.998l.832-.555l-2-2.998zm2.832 2.998l2-2.998l-.832-.555l-2 2.998zM9.5 11.993h4v-1h-4zm4 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5zm1.5-1.5V1.5h-1v8.994zM15 1.5c0-.83-.671-1.5-1.5-1.5v1c.277 0 .5.223.5.5zM13.5 0h-12v1h12zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5zM0 1.5v8.994h1V1.499zm0 8.994c0 .829.671 1.499 1.5 1.499v-1a.5.5 0 0 1-.5-.5zm1.5 1.499h4v-1h-4zM5 8h5V7H5zM4 5h7V4H4z"></svg:path>`,
})
export class TeenyiconsMessageTextOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageTextSolidIcon],svg[teenyicons-message-text-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H9.768l-1.852 2.775a.5.5 0 0 1-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5zM11 5H4V4h7zm-1 3H5V7h5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessageTextSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageTickOutlineIcon],svg[teenyicons-message-tick-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.5 11.493l.416-.278a.5.5 0 0 0-.416-.222zm2 2.998l-.416.277a.5.5 0 0 0 .832 0zm2-2.998v-.5a.5.5 0 0 0-.416.222zM7 8l-.354.354l.378.377l.352-.402zm-1.916 3.77l2 2.998l.832-.555l-2-2.998zm2.832 2.998l2-2.998l-.832-.555l-2 2.998zM9.5 11.993h4v-1h-4zm4 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5zm1.5-1.5V1.5h-1v8.994zM15 1.5c0-.83-.671-1.5-1.5-1.5v1c.277 0 .5.223.5.5zM13.5 0h-12v1h12zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5zM0 1.5v8.994h1V1.499zm0 8.994c0 .829.671 1.499 1.5 1.499v-1a.5.5 0 0 1-.5-.5zm1.5 1.499h4v-1h-4zm3.146-5.64l2 2l.708-.707l-2-2zm2.73 1.976l3.5-4l-.752-.658l-3.5 4z"></svg:path>`,
})
export class TeenyiconsMessageTickOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageTickSolidIcon],svg[teenyicons-message-tick-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H9.768l-1.852 2.775a.5.5 0 0 1-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5zm7.024 7.23l3.852-4.402l-.752-.658l-3.148 3.598l-1.622-1.623l-.708.708z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessageTickSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageXOutlineIcon],svg[teenyicons-message-x-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.5 11.493l.416-.278a.5.5 0 0 0-.416-.222zm2 2.998l-.416.277a.5.5 0 0 0 .832 0zm2-2.998v-.5a.5.5 0 0 0-.416.222zm-4.416.277l2 2.998l.832-.555l-2-2.998zm2.832 2.998l2-2.998l-.832-.555l-2 2.998zM9.5 11.993h4v-1h-4zm4 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5zm1.5-1.5V1.5h-1v8.994zM15 1.5c0-.83-.671-1.5-1.5-1.5v1c.277 0 .5.223.5.5zM13.5 0h-12v1h12zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5zM0 1.5v8.994h1V1.499zm0 8.994c0 .829.671 1.499 1.5 1.499v-1a.5.5 0 0 1-.5-.5zm1.5 1.499h4v-1h-4zm3.646-7.14l4 4l.708-.707l-4-4zm.708 4l4-4l-.708-.707l-4 4z"></svg:path>`,
})
export class TeenyiconsMessageXOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessageXSolidIcon],svg[teenyicons-message-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H9.768l-1.852 2.775a.5.5 0 0 1-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5zm9.146 7.354L7.5 7.207L5.854 8.854l-.708-.708L6.793 6.5L5.146 4.854l.708-.708L7.5 5.793l1.646-1.647l.708.708L8.207 6.5l1.647 1.646z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessageXSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessengerOutlineIcon],svg[teenyicons-messenger-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.935 12.264l.482.132a.5.5 0 0 0-.164-.517zM2.326 14.5l-.482-.131a.5.5 0 0 0 .694.584zm2.435-1.141l.188-.463a.5.5 0 0 0-.4.01zM6.5 6.5l.3-.4l-.293-.22l-.298.213zm2 1.5l-.3.4l.316.237l.304-.253zm-1-8C3.379 0 0 3.201 0 7.196h1C1 3.795 3.889 1 7.5 1zM0 7.196c0 2.188 1.023 4.139 2.617 5.454l.636-.771C1.87 10.739 1 9.062 1 7.196zm2.452 4.937l-.608 2.236l.965.262l.608-2.235zm.086 2.82l2.435-1.142l-.424-.905l-2.435 1.141zm2.035-1.131c.9.366 1.89.57 2.927.57v-1a6.8 6.8 0 0 1-2.55-.496zm2.927.57c4.121 0 7.5-3.202 7.5-7.196h-1c0 3.4-2.889 6.195-6.5 6.195zM15 7.195C15 3.2 11.621 0 7.5 0v1C11.111 1 14 3.795 14 7.196zM3.29 9.406l3.5-2.5l-.58-.813l-3.5 2.5zM6.2 6.9l2 1.5l.6-.8l-2-1.5zm2.62 1.484l3-2.5l-.64-.768l-3 2.5z"></svg:path>`,
})
export class TeenyiconsMessengerOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessengerSolidIcon],svg[teenyicons-messenger-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.196C0 3.2 3.379 0 7.5 0S15 3.201 15 7.196s-3.379 7.195-7.5 7.195a7.8 7.8 0 0 1-2.72-.489l-2.242 1.05a.5.5 0 0 1-.694-.583l.526-1.932C.918 11.129 0 9.269 0 7.196m8.516 1.441l3.304-2.753l-.64-.768l-2.696 2.247L6.507 5.88L2.71 8.593l.582.814L6.493 7.12z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessengerSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMicroSdCardOutlineIcon],svg[teenyicons-micro-sd-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 3v3m2-3v3m2-3v3m-8 8.5h10a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v5l-2 2v5a1 1 0 0 0 1 1Z"></svg:path>`,
})
export class TeenyiconsMicroSdCardOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMicroSdCardSolidIcon],svg[teenyicons-micro-sd-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5A1.5 1.5 0 0 1 4.5 0h8A1.5 1.5 0 0 1 14 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5V8.293l2-2zM6 3v3h1V3zm2 0v3h1V3zm2 3V3h1v3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMicroSdCardSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMicrophoneOutlineIcon],svg[teenyicons-microphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 4v2.5a5 5 0 0 0 5 5m5-7.5v2.5a5 5 0 0 1-5 5m0 0V15M5 14.5h5m-.5-12v4a2 2 0 1 1-4 0v-4a2 2 0 1 1 4 0Z"></svg:path>`,
})
export class TeenyiconsMicrophoneOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMicrophoneSolidIcon],svg[teenyicons-microphone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.5a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 1-5 0z"></svg:path><svg:path fill="currentColor" d="M2 4v2.5a5.5 5.5 0 0 0 5 5.478V14H5v1h5v-1H8v-2.022A5.5 5.5 0 0 0 13 6.5V4h-1v2.5a4.5 4.5 0 0 1-9 0V4z"></svg:path>`,
})
export class TeenyiconsMicrophoneSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinimiseAltOutlineIcon],svg[teenyicons-minimise-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13 5.5H9.5m0 0V2m0 3.5l4-4M5.5 13V9.5m0 0H2m3.5 0l-4 4"></svg:path>`,
})
export class TeenyiconsMinimiseAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinimiseAltSolidIcon],svg[teenyicons-minimise-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.854 1.854L10.707 5H13v1H9V2h1v2.293l3.146-3.147zM2 9h4v4H5v-2.293l-3.146 3.147l-.708-.707L4.293 10H2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMinimiseAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinimiseOutlineIcon],svg[teenyicons-minimise-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 9.5H13m-3.5 0V13m0-3.5l4 4m-.5-8H9.5m0 0V2m0 3.5l4-4M2 5.5h3.5m0 0V2m0 3.5l-4-4m4 11.5V9.5m0 0H2m3.5 0l-4 4"></svg:path>`,
})
export class TeenyiconsMinimiseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinimiseSolidIcon],svg[teenyicons-minimise-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.854 1.854L10.707 5H13v1H9V2h1v2.293l3.146-3.147zM4.293 5L1.146 1.854l.708-.708L5 4.293V2h1v4H2V5zM2 9h4v4H5v-2.293l-3.146 3.147l-.708-.707L4.293 10H2zm7 0h4v1h-2.293l3.147 3.146l-.708.708L10 10.707V13H9z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMinimiseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinusCircleOutlineIcon],svg[teenyicons-minus-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 7.5h7m-3.5 7a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsMinusCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinusCircleSolidIcon],svg[teenyicons-minus-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M4 8h7V7H4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMinusCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinusOutlineIcon],svg[teenyicons-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1 7.5h13"></svg:path>`,
})
export class TeenyiconsMinusOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinusSmallOutlineIcon],svg[teenyicons-minus-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 7.5h7"></svg:path>`,
})
export class TeenyiconsMinusSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinusSmallSolidIcon],svg[teenyicons-minus-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 8H4V7h7z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMinusSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinusSolidIcon],svg[teenyicons-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 8H1V7h13z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMinusSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMobileOutlineIcon],svg[teenyicons-mobile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 11.5h3m-5.5 3h8a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"></svg:path>`,
})
export class TeenyiconsMobileOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMobileSolidIcon],svg[teenyicons-mobile-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5A1.5 1.5 0 0 1 3.5 0h8A1.5 1.5 0 0 1 13 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 13.5zM6 12h3v-1H6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMobileSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoneyOutlineIcon],svg[teenyicons-money-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 10.5h1.5V9M11 4.5h1.5V6M4 4.5H2.5V6m0 3v1.5H4m3.5-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6-7h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsMoneyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoneySolidIcon],svg[teenyicons-money-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5zM4 4H2v2h1V5h1zm8 1h-1V4h2v2h-1zM7.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m3.5 5v1h2V9h-1v1zM2 9h1v1h1v1H2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoneySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoneyStackOutlineIcon],svg[teenyicons-money-stack-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 12.5h15m-15 2h15M2.5 4V2.5H4m7 0h1.5V4m-10 3v1.5H4m7 0h1.5V7m-5 .5a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6-7h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsMoneyStackOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoneyStackSolidIcon],svg[teenyicons-money-stack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v8A1.5 1.5 0 0 0 1.5 11h12A1.5 1.5 0 0 0 15 9.5v-8A1.5 1.5 0 0 0 13.5 0zM4 2H2v2h1V3h1zm3.5 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M12 3h-1V2h2v2h-1zM3 7H2v2h2V8H3zm8 2V8h1V7h1v2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M0 12v1h15v-1zm0 2v1h15v-1z"></svg:path>`,
})
export class TeenyiconsMoneyStackSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMongodbOutlineIcon],svg[teenyicons-mongodb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5.5l.369-.338a.5.5 0 0 0-.738 0zm0 13l-.393.309a.5.5 0 0 0 .786 0zM4.623 9.838l-.393.31zm.246-6.467L4.5 3.032zm5.262 0l.369-.338zm.246 6.467l.393.31zM8 15V.5H7V15zm-.107-1.809L5.016 9.53l-.786.618l2.877 3.662zM5.237 3.708L7.87.838L7.13.162L4.5 3.032zM7.131.838l2.632 2.87l.737-.675L7.869.163zm2.853 8.691l-2.877 3.662l.786.618l2.877-3.662zm-.221-5.82a4.5 4.5 0 0 1 .22 5.82l.787.618a5.5 5.5 0 0 0-.27-7.114zm-4.747 5.82a4.5 4.5 0 0 1 .221-5.82L4.5 3.032a5.5 5.5 0 0 0-.27 7.114z"></svg:path>`,
})
export class TeenyiconsMongodbOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMongodbSolidIcon],svg[teenyicons-mongodb-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.869.162a.5.5 0 0 0-.738 0l-2.63 2.87a5.5 5.5 0 0 0-.271 7.115L7 13.673V15h1v-1.327l2.77-3.526a5.5 5.5 0 0 0-.27-7.114zM8 3a.5.5 0 0 0-1 0v7.5a.5.5 0 0 0 1 0z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMongodbSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodFlatOutlineIcon],svg[teenyicons-mood-flat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5h1m5 0h1m-7 4h7m-3.5 5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsMoodFlatOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodFlatSolidIcon],svg[teenyicons-mood-flat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M4 6h1V5H4zm6 0h1V5h-1zm1 3v1H4V9z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoodFlatSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodFrownOutlineIcon],svg[teenyicons-mood-frown-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.29 10.187l-.424.266l.531.847l.424-.265zm4.898-.244l.498.035l.07-.998l-.5-.034zM5.82 11.035a7.28 7.28 0 0 1 4.367-1.092l.069-.997a8.28 8.28 0 0 0-4.967 1.241zM4 6h1V5H4zm6 0h1V5h-1zm-2.5 8A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1z"></svg:path>`,
})
export class TeenyiconsMoodFrownOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodFrownSolidIcon],svg[teenyicons-mood-frown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M4 6h1V5H4zm1.82 5.035a7.28 7.28 0 0 1 4.368-1.092l.498.035l.07-.998l-.5-.034a8.28 8.28 0 0 0-4.966 1.241l-.424.266l.531.847zM11 6h-1V5h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoodFrownSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodLaughOutlineIcon],svg[teenyicons-mood-laugh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 7.5V7a.5.5 0 0 0-.5.5zm6 0h.5a.5.5 0 0 0-.5-.5zm0-.5h-6v1h6zm-3 4C9.47 11 11 9.47 11 7.5h-1C10 8.918 8.918 10 7.5 10zM4 7.5C4 9.47 5.53 11 7.5 11v-1C6.082 10 5 8.918 5 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM4 6h1V5H4zm6 0h1V5h-1z"></svg:path>`,
})
export class TeenyiconsMoodLaughOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodLaughSolidIcon],svg[teenyicons-mood-laugh-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 10c-1.246 0-2.233-.835-2.454-2h4.908c-.221 1.165-1.208 2-2.454 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M4 6h1V5H4zm.5 1a.5.5 0 0 0-.5.5C4 9.47 5.53 11 7.5 11S11 9.47 11 7.5a.5.5 0 0 0-.5-.5zM11 6h-1V5h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoodLaughSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodSadOutlineIcon],svg[teenyicons-mood-sad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.1 9.7l-.3.4l.8.6l.3-.4zm6 .6l.3.4l.8-.6l-.3-.4zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM4 6h1V5H4zm6 0h1V5h-1zm.9 3.7c-1.7-2.267-5.1-2.267-6.8 0l.8.6a3.25 3.25 0 0 1 5.2 0z"></svg:path>`,
})
export class TeenyiconsMoodSadOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodSadSolidIcon],svg[teenyicons-mood-sad-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M4 6h1V5H4zm6 0h1V5h-1zm-5.1 4.3a3.25 3.25 0 0 1 5.2 0l.8-.6c-1.7-2.267-5.1-2.267-6.8 0z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoodSadSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodSmileOutlineIcon],svg[teenyicons-mood-smile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.9 8.7l-.3-.4l-.8.6l.3.4zm6 .6l.3-.4l-.8-.6l-.3.4zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM4 6h1V5H4zm6 0h1V5h-1zm.1 2.7a3.25 3.25 0 0 1-5.2 0l-.8.6c1.7 2.267 5.1 2.267 6.8 0z"></svg:path>`,
})
export class TeenyiconsMoodSmileOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodSmileSolidIcon],svg[teenyicons-mood-smile-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M4 6h1V5H4zm6 0h1V5h-1zM4.9 8.7a3.25 3.25 0 0 0 5.2 0l.8.6c-1.7 2.267-5.1 2.267-6.8 0z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoodSmileSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodSurprisedOutlineIcon],svg[teenyicons-mood-surprised-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5h1m5 0h1m-3.5 9a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm-.5-7h1a1.5 1.5 0 1 1 0 3H7a1.5 1.5 0 1 1 0-3Z"></svg:path>`,
})
export class TeenyiconsMoodSurprisedOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodSurprisedSolidIcon],svg[teenyicons-mood-surprised-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M4 6h1V5H4zm6 0h1V5h-1zM5 9a2 2 0 0 1 2-2h1a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoodSurprisedSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodTongueOutlineIcon],svg[teenyicons-mood-tongue-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5h1m5 0h1m-7 3h7m-5.5 0v2a2 2 0 1 0 4 0v-2m-2 6a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsMoodTongueOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodTongueSolidIcon],svg[teenyicons-mood-tongue-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10.5V9h3v1.5a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M5 6H4V5h1zm6 0h-1V5h1zM4 9h1v1.5a2.5 2.5 0 0 0 5 0V9h1V8H4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoodTongueSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoonOutlineIcon],svg[teenyicons-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M1.66 11.362q.65.136 1.34.138A6.5 6.5 0 0 0 7.693.503A7 7 0 1 1 1.66 11.362Z"></svg:path>`,
})
export class TeenyiconsMoonOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoonSolidIcon],svg[teenyicons-moon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.707.003a.5.5 0 0 0-.375.846a6 6 0 0 1-5.569 10.024a.5.5 0 0 0-.519.765A7.5 7.5 0 1 0 7.707.003"></svg:path>`,
})
export class TeenyiconsMoonSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoreHorizontalOutlineIcon],svg[teenyicons-more-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 7.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path>`,
})
export class TeenyiconsMoreHorizontalOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoreHorizontalSolidIcon],svg[teenyicons-more-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 7.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoreHorizontalSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoreVerticalOutlineIcon],svg[teenyicons-more-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 3a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm0 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm0 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"></svg:path>`,
})
export class TeenyiconsMoreVerticalOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoreVerticalSolidIcon],svg[teenyicons-more-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 2.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoreVerticalSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMouseOutlineIcon],svg[teenyicons-mouse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 4v3m0 7.5a5 5 0 0 1-5-5v-4a5 5 0 0 1 10 0v4a5 5 0 0 1-5 5Z"></svg:path>`,
})
export class TeenyiconsMouseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMouseSolidIcon],svg[teenyicons-mouse-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.5a5.5 5.5 0 1 1 11 0v4a5.5 5.5 0 1 1-11 0zM7 4v3h1V4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMouseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMovOutlineIcon],svg[teenyicons-mov-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3.5h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zm-8 6l.354-.354A.5.5 0 0 0 2 6.5zm1 1l-.354.354l.354.353l.354-.353zm1-1H5a.5.5 0 0 0-.854-.354zm6 3H10v.207l.146.147zm1 1l-.354.354a.5.5 0 0 0 .708 0zm1-1l.354.354l.146-.147V9.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM3 11V6.5H2V11zm-.854-4.146l1 1l.708-.708l-1-1zm1.708 1l1-1l-.708-.708l-1 1zM4 6.5V11h1V6.5zm4 1v2h1v-2zm-1 2v-2H6v2zm.5.5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 11zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 9.5zM7.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 6zm0-1A1.5 1.5 0 0 0 6 7.5h1a.5.5 0 0 1 .5-.5zM10 6v3.5h1V6zm.146 3.854l1 1l.708-.708l-1-1zm1.708 1l1-1l-.708-.708l-1 1zM13 9.5V6h-1v3.5z"></svg:path>`,
})
export class TeenyiconsMovOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMovSolidIcon],svg[teenyicons-mov-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM7.5 6A1.5 1.5 0 0 0 6 7.5v2a1.5 1.5 0 0 0 3 0v-2A1.5 1.5 0 0 0 7.5 6m-4.646.146A.5.5 0 0 0 2 6.5V11h1V7.707l.5.5l.5-.5V11h1V6.5a.5.5 0 0 0-.854-.354l-.646.647zM10 6h1v3.293l.5.5l.5-.5V6h1v3.707l-1.146 1.147a.5.5 0 0 1-.708 0L10 9.707z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMovSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMp3OutlineIcon],svg[teenyicons-mp3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3.5h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zm-8 6l.354-.354A.5.5 0 0 0 2 6.5zm1 1l-.354.354l.354.353l.354-.353zm1-1H5a.5.5 0 0 0-.854-.354zm2 0V6H6v.5zm6 0l.4.3a.5.5 0 0 0-.4-.8zm-1.5 2l-.4-.3a.5.5 0 0 0 .4.8zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM3 11V6.5H2V11zm-.854-4.146l1 1l.708-.708l-1-1zm1.708 1l1-1l-.708-.708l-1 1zM4 6.5V11h1V6.5zm2.5.5h1V6h-1zm.5 4V8.5H6V11zm0-2.5v-2H6v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 7.5zM7.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 6zM10 7h2.5V6H10zm2.1-.8l-1.5 2l.8.6l1.5-2zM11 9h.5V8H11zm.5 1H10v1h1.5zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 13 9.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 11.5 8z"></svg:path>`,
})
export class TeenyiconsMp3OutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMp3SolidIcon],svg[teenyicons-mp3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 8H7V7h.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM7.5 6H6v5h1V9h.5a1.5 1.5 0 1 0 0-3m-4.646.146A.5.5 0 0 0 2 6.5V11h1V7.707l.5.5l.5-.5V11h1V6.5a.5.5 0 0 0-.854-.354l-.646.647zM11.5 7H10V6h2.5a.5.5 0 0 1 .4.8l-.951 1.268A1.5 1.5 0 0 1 11.5 11H10v-1h1.5a.5.5 0 0 0 0-1H11a.5.5 0 0 1-.4-.8z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMp3SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMp4OutlineIcon],svg[teenyicons-mp4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3.5h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zm-8 6l.354-.354A.5.5 0 0 0 2 6.5zm1 1l-.354.354l.354.353l.354-.353zm1-1H5a.5.5 0 0 0-.854-.354zm2 0V6H6v.5zm4 2H10V9h.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM3 11V6.5H2V11zm-.854-4.146l1 1l.708-.708l-1-1zm1.708 1l1-1l-.708-.708l-1 1zM4 6.5V11h1V6.5zm2.5.5h1V6h-1zm.5 4V8.5H6V11zm0-2.5v-2H6v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 7.5zM7.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 6zM10 6v2.5h1V6zm.5 3h2V8h-2zM12 6v5h1V6z"></svg:path>`,
})
export class TeenyiconsMp4OutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMp4SolidIcon],svg[teenyicons-mp4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8h.5a.5.5 0 0 0 0-1H7z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM6 6h1.5a1.5 1.5 0 1 1 0 3H7v2H6zm-3.691.038a.5.5 0 0 1 .545.108l.646.647l.646-.647A.5.5 0 0 1 5 6.5V11H4V7.707l-.5.5l-.5-.5V11H2V6.5a.5.5 0 0 1 .309-.462M11 6h-1v3h2v2h1V6h-1v2h-1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMp4SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMsExcelOutlineIcon],svg[teenyicons-ms-excel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 3.5v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-2m0-6l4 4m-4 0l4-4m-5-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsMsExcelOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMsExcelSolidIcon],svg[teenyicons-ms-excel-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.793 7.5L2.146 5.854l.708-.708L4.5 6.793l1.646-1.647l.708.708L5.207 7.5l1.647 1.646l-.708.708L4.5 8.207L2.854 9.854l-.708-.708z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0A1.5 1.5 0 0 0 2 1.5V3h-.5A1.5 1.5 0 0 0 0 4.5v6A1.5 1.5 0 0 0 1.5 12H2v1.5A1.5 1.5 0 0 0 3.5 15h10a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 13.5 0zm-2 4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMsExcelSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMsPowerpointOutlineIcon],svg[teenyicons-ms-powerpoint-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.755 3.5a7 7 0 1 1 0 8M2.5 10V8.5m0 0v-3H5a1.5 1.5 0 1 1 0 3zm-1-5h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsMsPowerpointOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMsPowerpointSolidIcon],svg[teenyicons-ms-powerpoint-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 5H2v5h1V9h2a2 2 0 1 0 0-4m0 3H3V6h2a1 1 0 0 1 0 2"></svg:path><svg:path d="M7.5 0a7.49 7.49 0 0 0-6 3A1.5 1.5 0 0 0 0 4.5v6A1.5 1.5 0 0 0 1.5 12a7.5 7.5 0 1 0 6-12M1 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.487v6.026a.5.5 0 0 1-.5.487h-6a.5.5 0 0 1-.5-.5z"></svg:path></svg:g>`,
})
export class TeenyiconsMsPowerpointSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMsWordOutlineIcon],svg[teenyicons-ms-word-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 9.5l-.485.121a.5.5 0 0 0 .901.156zm1-1.5l.416-.277a.5.5 0 0 0-.832 0zm1 1.5l-.416.277a.5.5 0 0 0 .901-.156zM1.5 4h6V3h-6zm6.5.5v6h1v-6zM7.5 11h-6v1h6zM1 10.5v-6H0v6zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 12zm6.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 10.5zM7.5 4a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 3zm-6-1A1.5 1.5 0 0 0 0 4.5h1a.5.5 0 0 1 .5-.5zm.515 2.621l1 4l.97-.242l-1-4zm1.901 4.156l1-1.5l-.832-.554l-1 1.5zm.168-1.5l1 1.5l.832-.554l-1-1.5zm1.901 1.344l1-4l-.97-.242l-1 4zM3 3.5v-2H2v2zM3.5 1h10V0h-10zm10.5.5v12h1v-12zM13.5 14h-10v1h10zM3 13.5v-2H2v2zm.5.5a.5.5 0 0 1-.5-.5H2A1.5 1.5 0 0 0 3.5 15zm10.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zM13.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 0zM3 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 2 1.5z"></svg:path>`,
})
export class TeenyiconsMsWordOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMsWordSolidIcon],svg[teenyicons-ms-word-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.015 5.621l1 4a.5.5 0 0 0 .901.156l.584-.876l.584.876a.5.5 0 0 0 .901-.156l1-4l-.97-.242l-.726 2.903l-.373-.56a.5.5 0 0 0-.832 0l-.373.56l-.726-2.903z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0A1.5 1.5 0 0 0 2 1.5V3h-.5A1.5 1.5 0 0 0 0 4.5v6A1.5 1.5 0 0 0 1.5 12H2v1.5A1.5 1.5 0 0 0 3.5 15h10a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 13.5 0zm-2 4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMsWordSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsN64OutlineIcon],svg[teenyicons-n64-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 4v3M3 5.5h3m3 0h1m1 1h1m-7.5-4h-1a3 3 0 0 0-3 3v4.838a1.162 1.162 0 0 0 2.265.367L3.5 8.5h1.095a1 1 0 0 1 .995.9l.26 2.607a1.657 1.657 0 0 0 3.3 0L9.41 9.4a1 1 0 0 1 .995-.9H11.5l.735 2.205a1.162 1.162 0 0 0 2.265-.367V5.5a3 3 0 0 0-3-3h-1l-1-1h-4z"></svg:path>`,
})
export class TeenyiconsN64OutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsN64SolidIcon],svg[teenyicons-n64-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.293 1h4.414l1 1h.793A3.5 3.5 0 0 1 15 5.5v4.838a1.662 1.662 0 0 1-3.24.525L11.14 9h-.735a.5.5 0 0 0-.498.45l-.26 2.607a2.157 2.157 0 0 1-4.294 0l-.26-2.607A.5.5 0 0 0 4.595 9H3.86l-.62 1.863A1.662 1.662 0 0 1 0 10.338V5.5A3.5 3.5 0 0 1 3.5 2h.793zM4 7V6H3V5h1V4h1v1h1v1H5v1zm5-1h1V5H9zm3 0v1h-1V6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsN64SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNesOutlineIcon],svg[teenyicons-nes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 7v3M2 8.5h3m6 1h1m-3 0h1m-8.5-6h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsNesOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNesSolidIcon],svg[teenyicons-nes-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h12A1.5 1.5 0 0 1 15 4.5v6a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 10.5zM3 10V9H2V8h1V7h1v1h1v1H4v1zm8 0h1V9h-1zm-1 0H9V9h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNesSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNetlifyOutlineIcon],svg[teenyicons-netlify-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 7.5l-.354-.354a.5.5 0 0 0 0 .708zm7-7l.354-.354a.5.5 0 0 0-.708 0zm7 7l.354.354a.5.5 0 0 0 0-.708zm-7 7l-.354.354a.5.5 0 0 0 .708 0zM.854 7.854l7-7l-.708-.708l-7 7zm6.292-7l7 7l.708-.708l-7-7zm7 6.292l-7 7l.708.708l7-7zm-6.292 7l-7-7l-.708.708l7 7zM4.314 3.964l10 4l.372-.928l-10-4zM8.58 1.728l-5.5 8.5l.84.544l5.5-8.5zM2.1 5.8l6 8l.8-.6l-6-8zM.394 7.989l11.5 2.5l.212-.978l-11.5-2.5zm2.32 1.963l9.5-4.5l-.428-.904l-9.5 4.5zm7.292-6.53l-1.5 9.5l.988.156l1.5-9.5z"></svg:path>`,
})
export class TeenyiconsNetlifyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNetlifySolidIcon],svg[teenyicons-netlify-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.146.146a.5.5 0 0 1 .708 0l.98.98l-1.82 2.94l-2.706-1.081zM3.539 3.754L2.426 4.867L4.72 7.772L6.479 4.93zM1.714 5.579L.146 7.146a.5.5 0 0 0-.061.075l3.522.755zM.66 8.367l1.007 1.007l1.175-.54zm1.76 1.761l.52.52l.654-1.058zm1.246 1.246l3.48 3.48a.5.5 0 0 0 .708 0l.323-.324l.119-.615L4.819 9.51zm5.772 1.895l2.488-2.488l-1.93-.413zm3.33-3.33l1.781-1.78l-3.833-1.534l-.531 2.76zM14.92 7.23a.5.5 0 0 0-.066-.084L12.99 5.283l-1.368.628zm-2.684-2.7l-.937-.938l-.288 1.499zm-1.791-1.792l-.885-.885l-1.604 2.59l2.007.804zm-4.447 5.75L9.662 6.81l-.455 2.367zm.114 1.047l2.906.623l-.473 2.46zm.075-2.233l2.9-1.329l-1.665-.666z"></svg:path>`,
})
export class TeenyiconsNetlifySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNextCircleOutlineIcon],svg[teenyicons-next-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.5 5.5l.248-.434A.5.5 0 0 0 4 5.5zm0 4H4a.5.5 0 0 0 .748.434zm3.5-2l.248.434a.5.5 0 0 0 0-.868zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM4 5.5v4h1v-4zm.748 4.434l3.5-2l-.496-.868l-3.5 2zm3.5-2.868l-3.5-2l-.496.868l3.5 2zM10 5v5h1V5z"></svg:path>`,
})
export class TeenyiconsNextCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNextCircleSolidIcon],svg[teenyicons-next-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M10 5h1v5h-1zm-5.252.066A.5.5 0 0 0 4 5.5v4a.5.5 0 0 0 .748.434l3.5-2a.5.5 0 0 0 0-.868z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNextCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNextOutlineIcon],svg[teenyicons-next-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.5 2.5l.29-.407A.5.5 0 0 0 1 2.5zm0 10H1a.5.5 0 0 0 .79.407zm7-5l.29.407a.5.5 0 0 0 0-.814zM1 2.5v10h1v-10zm.79 10.407l7-5l-.58-.814l-7 5zm7-5.814l-7-5l-.58.814l7 5zM13 2v11h1V2z"></svg:path>`,
})
export class TeenyiconsNextOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNextSmallOutlineIcon],svg[teenyicons-next-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.5 5.5l.248-.434A.5.5 0 0 0 4 5.5zm0 4H4a.5.5 0 0 0 .748.434zm3.5-2l.248.434a.5.5 0 0 0 0-.868zm-4-2v4h1v-4zm.748 4.434l3.5-2l-.496-.868l-3.5 2zm3.5-2.868l-3.5-2l-.496.868l3.5 2zM10 5v5h1V5z"></svg:path>`,
})
export class TeenyiconsNextSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNextSmallSolidIcon],svg[teenyicons-next-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.748 5.066A.5.5 0 0 0 4 5.5v4a.5.5 0 0 0 .748.434l3.5-2a.5.5 0 0 0 0-.868zM10 10h1V5h-1z"></svg:path>`,
})
export class TeenyiconsNextSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNextSolidIcon],svg[teenyicons-next-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.79 2.093A.5.5 0 0 0 1 2.5v10a.5.5 0 0 0 .79.407l7-5a.5.5 0 0 0 0-.814zM13 13h1V2h-1z"></svg:path>`,
})
export class TeenyiconsNextSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNextjsOutlineIcon],svg[teenyicons-nextjs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"></svg:path>`,
})
export class TeenyiconsNextjsOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNextjsSolidIcon],svg[teenyicons-nextjs-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 11.698 6.216L4.906 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5M10 10V4h1v6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNextjsSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNgcOutlineIcon],svg[teenyicons-ngc-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 3.5a11.08 11.08 0 0 1 9 0M.5 6.5v5.764a1.236 1.236 0 0 0 2.342.553L3.5 11.5m11-5v5.764a1.236 1.236 0 0 1-2.342.553L11.5 11.5M6 7.5h3m-5.7 3.499L1.148 8.31A2.96 2.96 0 0 1 .5 6.461v-.396a2.565 2.565 0 0 1 5.032-.705l1.117 3.91a1.922 1.922 0 0 1-3.35 1.729Zm8.4 0l2.151-2.688a2.96 2.96 0 0 0 .649-1.85v-.396a2.565 2.565 0 0 0-5.032-.705L8.351 9.27a1.922 1.922 0 0 0 3.35 1.729Z"></svg:path>`,
})
export class TeenyiconsNgcOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNgcSolidIcon],svg[teenyicons-ngc-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.117 3.005a11.58 11.58 0 0 0-9.234 0A3.065 3.065 0 0 0 0 6.065v6.199a1.736 1.736 0 0 0 3.289.776l.516-1.033A2.422 2.422 0 0 0 7.13 9.133L6.806 8h1.388l-.323 1.133a2.422 2.422 0 0 0 3.324 2.874l.516 1.033A1.736 1.736 0 0 0 15 12.264V6.065a3.065 3.065 0 0 0-2.883-3.06m-7.473.433c.65.39 1.15 1.018 1.368 1.785L6.52 7h1.96l.508-1.777a3.06 3.06 0 0 1 1.368-1.785a10.6 10.6 0 0 0-5.712 0M14 8.925l-1.909 2.386l-.08.095l.595 1.187a.736.736 0 0 0 1.394-.33zm-11.012 2.48l-.08-.094L1 8.925v3.339a.736.736 0 0 0 1.394.33z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNgcSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNintendoSwitchOutlineIcon],svg[teenyicons-nintendo-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14.5H8a.5.5 0 0 0 .5.5zm0-12V2a.5.5 0 0 0-.5.5zm6 9h.5zm-3 3V14zm3-9H14zm-3-3V3zm-5-2H7a.5.5 0 0 0-.5-.5zm0 12v.5a.5.5 0 0 0 .5-.5zm-6-9H1zm3-3V1zm0 12v.5zm-3-3H0zm13.5-4v6h1v-6zM11.5 14h-3v1h3zm-2.5.5v-12H8v12zM8.5 3h3V2h-3zm5.5 8.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5zm1-6A3.5 3.5 0 0 0 11.5 2v1A2.5 2.5 0 0 1 14 5.5zm-9-5v12h1V.5zM6.5 12h-3v1h3zM1 9.5v-6H0v6zM3.5 1h3V0h-3zM1 3.5A2.5 2.5 0 0 1 3.5 1V0A3.5 3.5 0 0 0 0 3.5zM3.5 12A2.5 2.5 0 0 1 1 9.5H0A3.5 3.5 0 0 0 3.5 13zm9.5-1.5A1.5 1.5 0 0 0 11.5 9v1a.5.5 0 0 1 .5.5zM11.5 12a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM10 10.5a1.5 1.5 0 0 0 1.5 1.5v-1a.5.5 0 0 1-.5-.5zm1 0a.5.5 0 0 1 .5-.5V9a1.5 1.5 0 0 0-1.5 1.5zM3.5 5a.5.5 0 0 1-.5-.5H2A1.5 1.5 0 0 0 3.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 4.5zM3.5 4a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 3zm0-1A1.5 1.5 0 0 0 2 4.5h1a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class TeenyiconsNintendoSwitchOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNintendoSwitchSolidIcon],svg[teenyicons-nintendo-switch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 .5v12a.5.5 0 0 1-.5.5h-3A3.5 3.5 0 0 1 0 9.5v-6A3.5 3.5 0 0 1 3.5 0h3a.5.5 0 0 1 .5.5m-5 4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.5 10a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15 5.5v6a3.5 3.5 0 0 1-3.5 3.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3A3.5 3.5 0 0 1 15 5.5m-5 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNintendoSwitchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNodejsOutlineIcon],svg[teenyicons-nodejs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11.5 6v-.167c0-.736-.597-1.333-1.333-1.333H9a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3H9A1.5 1.5 0 0 1 7.5 9m-2-5v5.264a2 2 0 0 1-1.106 1.789L3.5 11.5m-2-1v-6l6-3.5l6 3.5v6l-6 3.5z"></svg:path>`,
})
export class TeenyiconsNodejsOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNodejsSolidIcon],svg[teenyicons-nodejs-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNodejsSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNoteOutlineIcon],svg[teenyicons-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 14.5H10a.5.5 0 0 0 .854.354zm0-4V10a.5.5 0 0 0-.5.5zm4 0l.354.354A.5.5 0 0 0 14.5 10zM1.5 1h12V0h-12zM1 13.5v-12H0v12zm13-12v8.586h1V1.5zM10.086 14H1.5v1h8.586zm3.768-3.56l-3.415 3.414l.707.707l3.415-3.415zM10.086 15a1.5 1.5 0 0 0 1.06-.44l-.707-.706a.5.5 0 0 1-.353.146zM14 10.086a.5.5 0 0 1-.146.353l.707.707a1.5 1.5 0 0 0 .439-1.06zM0 13.5A1.5 1.5 0 0 0 1.5 15v-1a.5.5 0 0 1-.5-.5zM13.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 0zm-12-1A1.5 1.5 0 0 0 0 1.5h1a.5.5 0 0 1 .5-.5zM11 14.5v-4h-1v4zm-.5-3.5h4v-1h-4zm3.646-.854l-4 4l.708.708l4-4zM3 4h9V3H3z"></svg:path>`,
})
export class TeenyiconsNoteOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNoteSolidIcon],svg[teenyicons-note-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5V9H9.5a.5.5 0 0 0-.5.5V15H1.5A1.5 1.5 0 0 1 0 13.5zM12 4H3V3h9z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 15h.086a1.5 1.5 0 0 0 1.06-.44l3.415-3.414a1.5 1.5 0 0 0 .439-1.06V10h-5z"></svg:path>`,
})
export class TeenyiconsNoteSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNpmOutlineIcon],svg[teenyicons-npm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 10.5v2h2v-2h8v-6H.5v6zm0 0v-6m4 0v6M6.5 6v3m-4-3v4.5m8-4.5v4.5m2-4.5v4.5"></svg:path>`,
})
export class TeenyiconsNpmOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNpmSolidIcon],svg[teenyicons-npm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4h15v7H7v2H4v-2H0zm4 6V5H1v5h1V6h1v4zm1-5v7h1v-2h2V5zm4 0v5h1V6h1v4h1V6h1v4h1V5zM6 9V6h1v3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNpmSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNuxtjsOutlineIcon],svg[teenyicons-nuxtjs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="m.5 12.5l6-10l6 10z"></svg:path><svg:path d="m4.5 12.5l5-8.5l5 8.5z"></svg:path></svg:g>`,
})
export class TeenyiconsNuxtjsOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNuxtjsSolidIcon],svg[teenyicons-nuxtjs-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 2a.5.5 0 0 1 .429.243l1.527 2.545l.613-1.042a.5.5 0 0 1 .862 0l5 8.5A.5.5 0 0 1 14.5 13H.5a.5.5 0 0 1-.429-.757l6-10A.5.5 0 0 1 6.5 2M5.374 12h6.243L8.465 6.746zM7.88 5.77L4.214 12h-2.83L6.5 3.472zm1.163-.005L12.783 12h.843L9.5 4.986z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNuxtjsSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsOmegaOutlineIcon],svg[teenyicons-omega-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.333 11.687a.5.5 0 1 0 .334.943zm-4 .943a.5.5 0 1 0 .334-.943zM5.5 14.5v.5H6v-.5zm4 0H9v.5h.5zM7.5 1A5.5 5.5 0 0 1 13 6.5h1A6.5 6.5 0 0 0 7.5 0zm0-1A6.5 6.5 0 0 0 1 6.5h1A5.5 5.5 0 0 1 7.5 1zM13 6.5a5.5 5.5 0 0 1-3.667 5.187l.334.943A6.5 6.5 0 0 0 14 6.5zm-7.333 5.187A5.5 5.5 0 0 1 2 6.5H1c0 2.83 1.81 5.238 4.333 6.13zM0 15h5.5v-1H0zm6-.5V12H5v2.5zm9-.5H9.5v1H15zm-5 .5V12H9v2.5z"></svg:path>`,
})
export class TeenyiconsOmegaOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsOmegaSolidIcon],svg[teenyicons-omega-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 6.5a6.5 6.5 0 1 1 9 6.002V14h5v1H9v-3h.026a.5.5 0 0 1 .307-.313a5.5 5.5 0 1 0-3.667 0a.5.5 0 0 1 .308.313H6v3H0v-1h5v-1.498A6.5 6.5 0 0 1 1 6.5" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsOmegaSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsOperaOutlineIcon],svg[teenyicons-opera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 12.5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3m0 10a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3m0 10h.585c1.907 0 3.78-.518 5.415-1.5m-6-8.5h.585c1.907 0 3.78.518 5.415 1.5m-6 10.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsOperaOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsOperaSolidIcon],svg[teenyicons-opera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7.5a7.5 7.5 0 0 1 13.147-4.936A17.5 17.5 0 0 0 8.74 2H7.5A3.5 3.5 0 0 0 4 5.5v4A3.5 3.5 0 0 0 7.5 13h1.241c1.488 0 2.969-.19 4.406-.563A7.5 7.5 0 0 1 0 7.5"></svg:path><svg:path fill="currentColor" d="M14.073 11.115A7.5 7.5 0 0 0 15 7.5c0-1.31-.336-2.543-.927-3.615l-.114-.038a16.5 16.5 0 0 0-3.962-.8A3.5 3.5 0 0 1 11 5.5v4a3.5 3.5 0 0 1-1.003 2.452a16.5 16.5 0 0 0 3.962-.799z"></svg:path>`,
})
export class TeenyiconsOperaSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsOtpOutlineIcon],svg[teenyicons-otp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 5.5h3m-1.5 0V10m3 0V7.5m0 0v-2h1a1 1 0 1 1 0 2zm-6-1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm-3-6h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsOtpOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsOtpSolidIcon],svg[teenyicons-otp-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M11 7h.5a.5.5 0 0 0 0-1H11z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5zm2 5a1.5 1.5 0 1 1 3 0v2a1.5 1.5 0 1 1-3 0zM7 6H6V5h3v1H8v4H7zm3-1h1.5a1.5 1.5 0 0 1 0 3H11v2h-1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsOtpSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPageBreakOutlineIcon],svg[teenyicons-page-break-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 8.993H0v1h.5zm2 1H3v-1h-.5zm2-1H4v1h.5zm2 1H7v-1h-.5zm2-1H8v1h.5zm2 1h.5v-1h-.5zm2-1H12v1h.5zm2 1h.5v-1h-.5zM10.5.5l.354-.354L10.707 0H10.5zm3 3h.5v-.207l-.146-.147zM.5 9.993h2v-1h-2zm4 0h2v-1h-2zm4 0h2v-1h-2zm4 0h2v-1h-2zm0 4.007h-10v1h10zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM13 3.5V8h1V3.5zm0 8.25v1.75h1v-1.75zM2 8V1.5H1V8zm0 5.5V11H1v2.5zm.5.5a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM2.5 0A1.5 1.5 0 0 0 1 1.5h1a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class TeenyiconsPageBreakOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPageBreakSolidIcon],svg[teenyicons-page-break-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V8H1zM1 11h13v2.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM0 8.993h3v1H0zm4 0h3v1H4zm7 0H8v1h3zm1 0h3v1h-3z"></svg:path>`,
})
export class TeenyiconsPageBreakSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPageNumberOutlineIcon],svg[teenyicons-page-number-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5.5l.354-.354L10.707 0H10.5zm3 3h.5v-.207l-.146-.147zm-4 9l-.354-.354A.5.5 0 0 0 9.5 13zm3 1.5h-10v1h10zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM2.5 0A1.5 1.5 0 0 0 1 1.5h1a.5.5 0 0 1 .5-.5zM12 12H9.5v1H12zm-2.146.854l1.792-1.793l-.707-.707l-1.793 1.792zM10.793 9H10.5v1h.293zM10.5 9A1.5 1.5 0 0 0 9 10.5h1a.5.5 0 0 1 .5-.5zm1.5 1.207C12 9.54 11.46 9 10.793 9v1c.114 0 .207.093.207.207zm-.354.854c.227-.227.354-.534.354-.854h-1a.2.2 0 0 1-.06.147zM13 3.5v10h1v-10zm-11 10v-12H1v12z"></svg:path>`,
})
export class TeenyiconsPageNumberOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPageNumberSolidIcon],svg[teenyicons-page-number-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM10.5 9A1.5 1.5 0 0 0 9 10.5h1a.5.5 0 0 1 .5-.5h.293a.207.207 0 0 1 .146.354l-1.793 1.792A.5.5 0 0 0 9.5 13H12v-1h-1.293l.94-.94A1.207 1.207 0 0 0 10.793 9z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPageNumberSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPaintbrushOutlineIcon],svg[teenyicons-paintbrush-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 14l-.481-.136a.5.5 0 0 0 .758.552zm.971-3.422l.481.136zm-.46 3.081l-.277-.416zm2.062-.148l-.215.451zM5 6l-.25-.433a.5.5 0 0 0-.104.787zm4 4l-.354.354a.5.5 0 0 0 .787-.103zM14.5.5l.433.25a.5.5 0 0 0-.684-.683zM.981 14.137l.971-3.423l-.962-.273l-.971 3.422zm2.956-4.923H4v-1h-.063zm2.063 2v.053h1v-.053zm-1.947 2h-.08v1h.08zm-3.32.03l-.51.34l.554.832l.512-.34zm2.555-.185a2.6 2.6 0 0 0-2.554.184l.555.832a1.6 1.6 0 0 1 1.569-.113zm.685.155c-.237 0-.471-.053-.685-.155l-.43.903c.348.166.73.252 1.115.252zM6 11.267a1.947 1.947 0 0 1-1.947 1.947v1A2.947 2.947 0 0 0 7 11.267zM4 9.214a2 2 0 0 1 2 2h1a3 3 0 0 0-3-3zm-2.048 1.5a2.06 2.06 0 0 1 1.985-1.5v-1c-1.37 0-2.573.91-2.947 2.227zm2.694-4.36l4 4l.708-.708l-4-4zM14.25.067l-9.5 5.5l.5.866l9.5-5.5zM9.433 10.251l5.5-9.5l-.866-.502l-5.5 9.5zM7.146 4.854l3 3l.708-.708l-3-3z"></svg:path>`,
})
export class TeenyiconsPaintbrushOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPaintbrushSolidIcon],svg[teenyicons-paintbrush-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.854.146a.5.5 0 0 1 .079.605l-3.841 6.634l-3.477-3.477L14.25.068a.5.5 0 0 1 .605.078M6.72 4.427l-1.97 1.14a.5.5 0 0 0-.104.787l4 4a.5.5 0 0 0 .787-.103l1.14-1.97zM.99 10.441a3.06 3.06 0 0 1 2.947-2.227H4a3 3 0 0 1 3 3v.053a2.947 2.947 0 0 1-2.947 2.947h-.08a2.6 2.6 0 0 1-1.115-.252a1.6 1.6 0 0 0-1.57.113l-.51.341a.5.5 0 0 1-.759-.553z"></svg:path>`,
})
export class TeenyiconsPaintbrushSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPaintbucketOutlineIcon],svg[teenyicons-paintbucket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.086 2.914l-.354-.353zM1.914 7.086l-.353-.354zm0 2.828l.354-.353zm3.172 3.172l.353-.354zm2.828 0l.354.353zm4.172-4.172l-.354-.353zm0-2.828l.353-.354zM8.914 2.914l-.353.354zm3.767 7.586l.353-.354l-.353-.353l-.354.353zm1.18 1.18l-.353.354zM11.639 14l.312-.39zm2.086 0l-.312-.39zM5.732 2.56L1.561 6.733l.707.707l4.171-4.171zm-4.171 7.708l3.171 3.171l.707-.707l-3.171-3.171zm6.707 3.171l4.171-4.171l-.707-.707l-4.171 4.171zm4.171-7.707L9.268 2.561l-.707.707l3.171 3.171zm0 3.536a2.5 2.5 0 0 0 0-3.536l-.707.707a1.5 1.5 0 0 1 0 2.122zm-7.707 4.171a2.5 2.5 0 0 0 3.536 0l-.707-.707a1.5 1.5 0 0 1-2.122 0zM1.561 6.732a2.5 2.5 0 0 0 0 3.536l.707-.707a1.5 1.5 0 0 1 0-2.122zm4.878-3.464a1.5 1.5 0 0 1 2.122 0l.707-.707a2.5 2.5 0 0 0-3.536 0zM7 7V2.5H6V7zM2 2.5v4h1v-4zM4.5 0A2.5 2.5 0 0 0 2 2.5h1A1.5 1.5 0 0 1 4.5 1zM7 2.5A2.5 2.5 0 0 0 4.5 0v1A1.5 1.5 0 0 1 6 2.5zM1.5 10h10V9h-10zm10.827.854l1.181 1.18l.707-.707l-1.18-1.18zm-.473 1.18l1.18-1.18l-.707-.708l-1.18 1.181zm.096 1.576c-.29-.232-.422-.51-.437-.77c-.016-.257.08-.545.34-.806l-.707-.707c-.443.444-.666 1.004-.632 1.575c.035.569.324 1.099.811 1.488zm1.462 0a1.17 1.17 0 0 1-1.462 0l-.625.78a2.17 2.17 0 0 0 2.711 0zm.096-1.576c.26.26.357.549.341.807c-.016.259-.147.537-.437.769l.624.78c.487-.39.777-.919.811-1.489s-.188-1.13-.632-1.574z"></svg:path>`,
})
export class TeenyiconsPaintbucketOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPaintbucketSolidIcon],svg[teenyicons-paintbucket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 0A2.5 2.5 0 0 0 2 2.5v3.793l-.44.44a2.5 2.5 0 0 0 0 3.535l3.172 3.171a2.5 2.5 0 0 0 3.536 0l4.171-4.171a2.5 2.5 0 0 0 0-3.536L9.268 2.561a2.5 2.5 0 0 0-2.342-.666A2.5 2.5 0 0 0 4.5 0M6 3.707V7h1V2.914a1.5 1.5 0 0 1 1.56.354l3.172 3.171a1.5 1.5 0 0 1 0 2.122l-.44.439H1.915a1.5 1.5 0 0 1 .354-1.56zm-.009-1.372A1.5 1.5 0 0 0 3 2.5v2.793L5.732 2.56q.123-.124.259-.226" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m12.645 9.737l1.534 1.534a2.17 2.17 0 1 1-3.069 0z"></svg:path>`,
})
export class TeenyiconsPaintbucketSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsParagraphOutlineIcon],svg[teenyicons-paragraph-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13 1.5H6.5a4 4 0 1 0 0 8h1m3 4.5V1.5M7.5 14V1.5"></svg:path>`,
})
export class TeenyiconsParagraphOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsParagraphSolidIcon],svg[teenyicons-paragraph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.5A4.5 4.5 0 0 1 6.5 1H13v1h-2v12h-1V2H8v12H7v-4h-.5A4.5 4.5 0 0 1 2 5.5M7 9V2h-.5a3.5 3.5 0 1 0 0 7z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsParagraphSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPasswordOutlineIcon],svg[teenyicons-password-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 8.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1m0-4h-4a2 2 0 1 0 0 4h4m0-4a2 2 0 1 1 0 4m-9-6v-3a3 3 0 0 1 6 0v3m2.5 4h1m-3 0h1m-3 0h1"></svg:path>`,
})
export class TeenyiconsPasswordOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPasswordSolidIcon],svg[teenyicons-password-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h-1v-1h1zm-3 0h1v-1H8zm5 0h-1v-1h1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3 6V3.5a3.5 3.5 0 1 1 7 0V6h1.5A1.5 1.5 0 0 1 13 7.5v.55a2.5 2.5 0 0 1 0 4.9v.55a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 0 13.5v-6A1.5 1.5 0 0 1 1.5 6zm1-2.5a2.5 2.5 0 0 1 5 0V6H4zM8.5 9a1.5 1.5 0 1 0 0 3h4a1.5 1.5 0 0 0 0-3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPasswordSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPatreonOutlineIcon],svg[teenyicons-patreon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5.5h-2v14h2zm2 5a5 5 0 1 0 10 0a5 5 0 0 0-10 0Z"></svg:path>`,
})
export class TeenyiconsPatreonOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPatreonSolidIcon],svg[teenyicons-patreon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0H0v15h3zm6.5 0a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11"></svg:path>`,
})
export class TeenyiconsPatreonSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPauseCircleOutlineIcon],svg[teenyicons-pause-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 5v5m2-5v5m-1 4.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsPauseCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPauseCircleSolidIcon],svg[teenyicons-pause-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M7 10H6V5h1zm2 0H8V5h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPauseCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPauseOutlineIcon],svg[teenyicons-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 3v9m4-9v9"></svg:path>`,
})
export class TeenyiconsPauseOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPauseSmallOutlineIcon],svg[teenyicons-pause-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 5v5m2-5v5"></svg:path>`,
})
export class TeenyiconsPauseSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPauseSmallSolidIcon],svg[teenyicons-pause-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 10V5h1v5zm2 0V5h1v5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPauseSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPauseSolidIcon],svg[teenyicons-pause-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 12V3h1v9zm4 0V3h1v9z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPauseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPawOutlineIcon],svg[teenyicons-paw-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 3V2a1.5 1.5 0 1 0-3 0v1a1.5 1.5 0 1 0 3 0Zm5 0V2a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 1 0 3 0Zm3 4.5V7a1.5 1.5 0 0 0-3 0v.5a1.5 1.5 0 0 0 3 0Zm-11 0V7a1.5 1.5 0 1 0-3 0v.5a1.5 1.5 0 1 0 3 0Zm-.645 4.14l2.918-3.543a2.237 2.237 0 0 1 3.454 0l2.918 3.543c.939 1.14.128 2.86-1.35 2.86c-.194 0-.385-.045-.559-.132l-.36-.18a5.32 5.32 0 0 0-4.753 0l-.36.18a1.25 1.25 0 0 1-.558.132c-1.478 0-2.289-1.72-1.35-2.86Z"></svg:path>`,
})
export class TeenyiconsPawOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPawSolidIcon],svg[teenyicons-paw-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0a2 2 0 0 0-2 2v1a2 2 0 1 0 4 0V2a2 2 0 0 0-2-2m5 0a2 2 0 0 0-2 2v1a2 2 0 1 0 4 0V2a2 2 0 0 0-2-2M2 5a2 2 0 0 0-2 2v.5a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2m11 0a2 2 0 0 0-2 2v.5a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2M9.613 7.779a2.737 2.737 0 0 0-4.226 0L2.47 11.322C1.261 12.789 2.305 15 4.205 15c.272 0 .54-.063.782-.185l.36-.18a4.81 4.81 0 0 1 4.306 0l.36.18c.242.122.51.185.782.185c1.9 0 2.944-2.211 1.736-3.678z"></svg:path>`,
})
export class TeenyiconsPawSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPawsOutlineIcon],svg[teenyicons-paws-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" d="m1.425 2.118l.307.647M.75 4.647l.307.647m5.277-3.176l.307.706M3.88 1l.306.647m6.934 5.118l-.306.647m-2.148.47l-.307.706m5.891 1.824l-.307.647m-.368-3.177l-.307.647M3.941 4.235c.43-.176.92-.176 1.35.06l1.657.823c.552.294.736 1 .307 1.47c-.185.236-.491.353-.798.353H5.72c-.306 0-.613.118-.797.353l-.43.53c-.184.235-.49.352-.798.352c-.613 0-1.104-.588-.981-1.176l.368-1.765c.123-.411.43-.823.859-1ZM11.059 10c.43.177.737.588.86 1.059l.367 1.765A.976.976 0 0 1 11.305 14c-.307 0-.614-.118-.798-.353l-.43-.53c-.184-.235-.49-.352-.797-.352h-.737c-.307 0-.613-.118-.798-.353a.978.978 0 0 1 .307-1.47l1.657-.824a1.25 1.25 0 0 1 1.35-.118Z"></svg:path>`,
})
export class TeenyiconsPawsOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPawsSolidIcon],svg[teenyicons-paws-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.852 1.885L4.117.334l-.903.428l.735 1.551zM2.398 3.002l-.735-1.55l-.904.428l.735 1.55zm4.901.081L6.593 1.46l-.917.398l.706 1.623zm-3.549.69a2.06 2.06 0 0 1 1.772.077l1.66.826c.786.419 1.124 1.484.454 2.236c-.3.373-.764.53-1.18.53H5.72c-.192 0-.336.074-.403.16l-.006.007l-.427.527c-.301.381-.769.54-1.189.54c-.917 0-1.661-.866-1.47-1.778l.367-1.765l.01-.04c.157-.524.55-1.074 1.149-1.32M1.723 5.532L.988 3.98l-.904.428l.735 1.551zm9.328 2.546l.735-1.55l-.903-.43l-.735 1.551zm2.455 1.117l.735-1.55l-.904-.429l-.735 1.551zm-4.888.051l.706-1.623l-.917-.399L7.7 8.847zm.825.445a1.75 1.75 0 0 1 1.832-.143c.591.254.976.806 1.127 1.385l.006.024l.368 1.764c.186.89-.47 1.779-1.471 1.779c-.42 0-.888-.16-1.189-.54l-.433-.534c-.067-.086-.21-.161-.403-.161h-.737c-.42 0-.89-.16-1.191-.545a1.48 1.48 0 0 1 .465-2.22l.013-.007zm4.737 2.034l.736-1.55l-.904-.43l-.735 1.551z"></svg:path>`,
})
export class TeenyiconsPawsSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPaypalOutlineIcon],svg[teenyicons-paypal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M.5 12.5h4l1-4h1.795a4.625 4.625 0 0 0 4.33-3.001C12.532 3.08 10.745.5 8.161.5H3.5z"></svg:path><svg:path d="M4 14.5h4L9 11h1.577c1.477 0 2.82-.859 3.438-2.2c.927-2.008-.54-4.3-2.75-4.3H6.5z"></svg:path></svg:g>`,
})
export class TeenyiconsPaypalOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPaypalSolidIcon],svg[teenyicons-paypal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.015.379A.5.5 0 0 1 3.5 0h4.661c2.397 0 4.191 1.957 4.204 4.172c1.928.626 3.021 2.851 2.105 4.837a4.29 4.29 0 0 1-3.893 2.491h-1.2l-.896 3.137A.5.5 0 0 1 8 15H4a.5.5 0 0 1-.485-.621L3.86 13H.5a.5.5 0 0 1-.485-.621zM8.16 1c1.762 0 3.097 1.388 3.197 3.001L11.264 4H6.5a.5.5 0 0 0-.485.379L4.11 12H1.14L3.89 1zm-.866 8H5.89l-1.25 5h2.983l.896-3.137A.5.5 0 0 1 9 10.5h1.577a3.29 3.29 0 0 0 2.985-1.91c.626-1.357-.057-2.87-1.32-3.396q-.059.24-.149.48A5.125 5.125 0 0 1 7.296 9" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPaypalSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPdfOutlineIcon],svg[teenyicons-pdf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 6.5V6H2v.5zm4 0V6H6v.5zm0 4H6v.5h.5zm7-7h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zM2.5 7h1V6h-1zm.5 4V8.5H2V11zm0-2.5v-2H2v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5zM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6zM6 6.5v4h1v-4zm.5 4.5h1v-1h-1zM9 9.5v-2H8v2zM7.5 6h-1v1h1zM9 7.5A1.5 1.5 0 0 0 7.5 6v1a.5.5 0 0 1 .5.5zM7.5 11A1.5 1.5 0 0 0 9 9.5H8a.5.5 0 0 1-.5.5zM10 6v5h1V6zm.5 1H13V6h-2.5zm0 2H12V8h-1.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class TeenyiconsPdfOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPdfSolidIcon],svg[teenyicons-pdf-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 8H3V7h.5a.5.5 0 0 1 0 1M7 10V7h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM3.5 6H2v5h1V9h.5a1.5 1.5 0 1 0 0-3m4 0H6v5h1.5A1.5 1.5 0 0 0 9 9.5v-2A1.5 1.5 0 0 0 7.5 6m2.5 5V6h3v1h-2v1h1v1h-1v2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPdfSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPenOutlineIcon],svg[teenyicons-pen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5.5V0H2v.5zm10 0h.5V0h-.5zM4.947 4.724a.5.5 0 0 0-.894-.448zM2.5 8.494l-.447-.223l-.146.293l.21.251zm5 5.997l-.384.32a.5.5 0 0 0 .769 0zm5-5.996l.384.32l.21-.251l-.146-.293zm-1.553-4.219a.5.5 0 0 0-.894.448zM8 9.494v-.5H7v.5zm-.5-4.497A4.5 4.5 0 0 1 3 .5H2a5.5 5.5 0 0 0 5.5 5.497zM2.5 1h10V0h-10zM12 .5a4.5 4.5 0 0 1-4.5 4.497v1c3.038 0 5.5-2.46 5.5-5.497zM4.053 4.276l-2 3.995l.895.448l2-3.995zM2.116 8.815l5 5.996l.769-.64l-5-5.996zm5.768 5.996l5-5.996l-.768-.64l-5 5.996zm5.064-6.54l-2-3.995l-.895.448l2 3.995zM8 14.49V9.494H7v4.997z"></svg:path>`,
})
export class TeenyiconsPenOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPenSolidIcon],svg[teenyicons-pen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h11v.5a5.48 5.48 0 0 1-1.874 4.134l1.968 3.93L8 14.672V8.994H7v5.678L1.907 8.564l1.967-3.93A5.48 5.48 0 0 1 2 .5z"></svg:path>`,
})
export class TeenyiconsPenSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPhoneOutlineIcon],svg[teenyicons-phone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.72.5H2.5a2 2 0 0 0-2 2v2c0 5.523 4.477 10 10 10h2a2 2 0 0 0 2-2v-1.382a1 1 0 0 0-.553-.894l-2.416-1.208a1 1 0 0 0-1.396.578l-.297.893a1.21 1.21 0 0 1-1.385.804A6.05 6.05 0 0 1 3.71 6.547a1.21 1.21 0 0 1 .804-1.385l1.108-.37a1 1 0 0 0 .654-1.19L5.69 1.257A1 1 0 0 0 4.72.5Z"></svg:path>`,
})
export class TeenyiconsPhoneOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPhoneSolidIcon],svg[teenyicons-phone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 0 2.5v2C0 10.299 4.701 15 10.5 15h2a2.5 2.5 0 0 0 2.5-2.5v-1.382a1.5 1.5 0 0 0-.83-1.342l-2.415-1.208a1.5 1.5 0 0 0-2.094.868l-.298.893a.71.71 0 0 1-.812.471A5.55 5.55 0 0 1 4.2 6.45a.71.71 0 0 1 .471-.812l1.109-.37a1.5 1.5 0 0 0 .98-1.787l-.586-2.344A1.5 1.5 0 0 0 4.72 0z"></svg:path>`,
})
export class TeenyiconsPhoneSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPhonecallBlockedOutlineIcon],svg[teenyicons-phonecall-blocked-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m13.5 1.5l-4 4m-7-5h2.22a1 1 0 0 1 .97.757l.585 2.345a1 1 0 0 1-.654 1.19l-1.108.37a1.21 1.21 0 0 0-.804 1.385a6.05 6.05 0 0 0 4.744 4.744a1.21 1.21 0 0 0 1.385-.804l.297-.893a1 1 0 0 1 1.396-.578l2.416 1.208a1 1 0 0 1 .553.894V12.5a2 2 0 0 1-2 2h-2c-5.523 0-10-4.477-10-10v-2a2 2 0 0 1 2-2Zm9 6a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class TeenyiconsPhonecallBlockedOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPhonecallBlockedSolidIcon],svg[teenyicons-phonecall-blocked-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2.5A2.5 2.5 0 0 1 2.5 0h2.22a1.5 1.5 0 0 1 1.454 1.136L6.76 3.48a1.5 1.5 0 0 1-.98 1.787l-1.109.37a.71.71 0 0 0-.471.812A5.55 5.55 0 0 0 8.55 10.8a.71.71 0 0 0 .812-.471l.298-.893a1.5 1.5 0 0 1 2.094-.868l2.416 1.208a1.5 1.5 0 0 1 .83 1.342V12.5a2.5 2.5 0 0 1-2.5 2.5h-2C4.701 15 0 10.299 0 4.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M11.5 1a2.5 2.5 0 0 0-2.086 3.879l3.465-3.465A2.5 2.5 0 0 0 11.5 1m0 5c-.51 0-.983-.152-1.379-.414l3.465-3.465A2.5 2.5 0 0 1 11.5 6" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPhonecallBlockedSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPhonecallOutlineIcon],svg[teenyicons-phonecall-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m14.5.5l-6 6m6-6V4m0-3.5H11M2.5.5h2.22a1 1 0 0 1 .97.757l.585 2.345a1 1 0 0 1-.654 1.19l-1.108.37a1.21 1.21 0 0 0-.804 1.385a6.05 6.05 0 0 0 4.744 4.744a1.21 1.21 0 0 0 1.385-.804l.297-.893a1 1 0 0 1 1.396-.578l2.416 1.208a1 1 0 0 1 .553.894V12.5a2 2 0 0 1-2 2h-2c-5.523 0-10-4.477-10-10v-2a2 2 0 0 1 2-2Z"></svg:path>`,
})
export class TeenyiconsPhonecallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPhonecallReceiveOutlineIcon],svg[teenyicons-phonecall-receive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m14.5.5l-6 6m0 0V3m0 3.5H12M2.5.5h2.22a1 1 0 0 1 .97.757l.585 2.345a1 1 0 0 1-.654 1.19l-1.108.37a1.21 1.21 0 0 0-.804 1.385a6.05 6.05 0 0 0 4.744 4.744a1.21 1.21 0 0 0 1.385-.804l.297-.893a1 1 0 0 1 1.396-.578l2.416 1.208a1 1 0 0 1 .553.894V12.5a2 2 0 0 1-2 2h-2c-5.523 0-10-4.477-10-10v-2a2 2 0 0 1 2-2Z"></svg:path>`,
})
export class TeenyiconsPhonecallReceiveOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPhonecallReceiveSolidIcon],svg[teenyicons-phonecall-receive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 0 2.5v2C0 10.299 4.701 15 10.5 15h2a2.5 2.5 0 0 0 2.5-2.5v-1.382a1.5 1.5 0 0 0-.83-1.342l-2.415-1.208a1.5 1.5 0 0 0-2.094.868l-.298.893a.71.71 0 0 1-.812.471A5.55 5.55 0 0 1 4.2 6.45a.71.71 0 0 1 .471-.812l1.109-.37a1.5 1.5 0 0 0 .98-1.787l-.586-2.344A1.5 1.5 0 0 0 4.72 0z"></svg:path><svg:path fill="currentColor" d="M14.146.146L9 5.293V3H8v4h4V6H9.707L14.854.854z"></svg:path>`,
})
export class TeenyiconsPhonecallReceiveSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPhonecallSolidIcon],svg[teenyicons-phonecall-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0h-4v1h2.293L8.146 6.146l.708.708L14 1.707V4h1z"></svg:path><svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 0 2.5v2C0 10.299 4.701 15 10.5 15h2a2.5 2.5 0 0 0 2.5-2.5v-1.382a1.5 1.5 0 0 0-.83-1.342l-2.415-1.208a1.5 1.5 0 0 0-2.094.868l-.298.893a.71.71 0 0 1-.812.471A5.55 5.55 0 0 1 4.2 6.45a.71.71 0 0 1 .471-.812l1.109-.37a1.5 1.5 0 0 0 .98-1.787l-.586-2.344A1.5 1.5 0 0 0 4.72 0z"></svg:path>`,
})
export class TeenyiconsPhonecallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPieChartAltOutlineIcon],svg[teenyicons-pie-chart-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5.5V0a.5.5 0 0 0-.5.5zm8 8V9a.5.5 0 0 0 .5-.5zm-8 0H6V9h.5zm0 6.5A6.5 6.5 0 0 0 13 8.5h-1A5.5 5.5 0 0 1 6.5 14zM0 8.5A6.5 6.5 0 0 0 6.5 15v-1A5.5 5.5 0 0 1 1 8.5zm1 0A5.5 5.5 0 0 1 6.5 3V2A6.5 6.5 0 0 0 0 8.5zM6.5 1A7.5 7.5 0 0 1 14 8.5h1A8.5 8.5 0 0 0 6.5 0zM6 .5v8h1v-8zM6.5 9h8V8h-8z"></svg:path>`,
})
export class TeenyiconsPieChartAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPieChartAltSolidIcon],svg[teenyicons-pie-chart-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 0H6v9h9v-.5A8.5 8.5 0 0 0 6.5 0"></svg:path><svg:path fill="currentColor" d="M12.826 10H5V2.174A6.5 6.5 0 1 0 12.826 10"></svg:path>`,
})
export class TeenyiconsPieChartAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPieChartOutlineIcon],svg[teenyicons-pie-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7.5H7a.5.5 0 0 0 .146.354zm0 6.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM7 0v7.5h1V0zm.724 7.947l6-3l-.448-.894l-6 3zm-.578-.093l5 5l.708-.708l-5-5z"></svg:path>`,
})
export class TeenyiconsPieChartOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPieChartSolidIcon],svg[teenyicons-pie-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 .016a7.5 7.5 0 1 0 5.438 13.13L7.15 7.857A.5.5 0 0 1 7 7.5z"></svg:path><svg:path fill="currentColor" d="M13.145 12.438A7.47 7.47 0 0 0 15 7.5a7.5 7.5 0 0 0-.581-2.9L8.344 7.637zm.825-8.732A7.5 7.5 0 0 0 8 .016v6.675z"></svg:path>`,
})
export class TeenyiconsPieChartSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPinAltOutlineIcon],svg[teenyicons-pin-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 15V8.5m0 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path>`,
})
export class TeenyiconsPinAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPinAltSolidIcon],svg[teenyicons-pin-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 0A4.5 4.5 0 0 0 7 8.973V15h1V8.973A4.5 4.5 0 0 0 7.5 0"></svg:path>`,
})
export class TeenyiconsPinAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPinOutlineIcon],svg[teenyicons-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" clip-rule="evenodd"><svg:path d="M7.5 8.495a2 2 0 0 0 2-1.999a2 2 0 0 0-4 0a2 2 0 0 0 2 1.999Z"></svg:path><svg:path d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A6 6 0 0 1 7.5.5c3.313 0 6 2.685 6 5.996Z"></svg:path></svg:g>`,
})
export class TeenyiconsPinOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPinSolidIcon],svg[teenyicons-pin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6.496a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 6.496A6.5 6.5 0 0 1 7.5 0C11.089 0 14 2.909 14 6.496c0 2.674-1.338 4.793-2.772 6.225a11 11 0 0 1-2.115 1.654c-.322.19-.623.34-.885.442c-.247.098-.506.174-.728.174s-.481-.076-.728-.174a6.5 6.5 0 0 1-.885-.442a11 11 0 0 1-2.115-1.654C2.338 11.289 1 9.17 1 6.496m6.5-2.499a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 5 0a2.5 2.5 0 0 0-2.5-2.5" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPinSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPinterestOutlineIcon],svg[teenyicons-pinterest-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m4.5 13.5l3-7m-3.236 3a3 3 0 0 1-.764-2V7A3.5 3.5 0 0 1 7 3.5h1A3.5 3.5 0 0 1 11.5 7v.5a3 3 0 0 1-3 3a2.08 2.08 0 0 1-1.974-1.423L6.5 9m1 5.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsPinterestOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPinterestSolidIcon],svg[teenyicons-pinterest-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7.5a7.5 7.5 0 1 1 4.584 6.912l1.911-4.367A2.58 2.58 0 0 0 8.5 11A3.5 3.5 0 0 0 12 7.5V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v.5c0 .896.337 1.715.891 2.333l.745-.666A2.5 2.5 0 0 1 4 7.5V7a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v.5A2.5 2.5 0 0 1 8.5 10A1.58 1.58 0 0 1 7 8.919l-.005-.016l.963-2.203l-.916-.4l-3.352 7.66A7.5 7.5 0 0 1 0 7.5"></svg:path>`,
})
export class TeenyiconsPinterestSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlantOutlineIcon],svg[teenyicons-plant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 15V7m0 .5v3m0-3a4 4 0 0 0-4-4h-3v3a4 4 0 0 0 4 4h3m0-3h3a4 4 0 0 0 4-4v-3h-3a4 4 0 0 0-4 4zm0 0l4-4m-4 7l-4-4"></svg:path>`,
})
export class TeenyiconsPlantOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlantSolidIcon],svg[teenyicons-plant-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 4.5A4.5 4.5 0 0 1 11.5 0H15v3.5A4.5 4.5 0 0 1 10.5 8H8v7H7v-4H4.5A4.5 4.5 0 0 1 0 6.5V3h3.5c1.414 0 2.675.652 3.5 1.671zm1.146 1.646l3-3l.708.708l-3 3zm-2 3.708l-3-3l.708-.708l3 3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPlantSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlayCircleOutlineIcon],svg[teenyicons-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.5 5.5l.248-.434A.5.5 0 0 0 6 5.5zm0 4H6a.5.5 0 0 0 .748.434zm3.5-2l.248.434a.5.5 0 0 0 0-.868zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM6 5.5v4h1v-4zm.748 4.434l3.5-2l-.496-.868l-3.5 2zm3.5-2.868l-3.5-2l-.496.868l3.5 2z"></svg:path>`,
})
export class TeenyiconsPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlayCircleSolidIcon],svg[teenyicons-play-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m6.249-2.432a.5.5 0 0 1 .5-.002l3.5 2a.5.5 0 0 1 0 .868l-3.5 2A.5.5 0 0 1 6 9.5v-4a.5.5 0 0 1 .249-.432" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPlayCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlayOutlineIcon],svg[teenyicons-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4.5 12.5v-10l7 5z"></svg:path>`,
})
export class TeenyiconsPlayOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlaySmallOutlineIcon],svg[teenyicons-play-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5 9.5v-4l3.5 2z"></svg:path>`,
})
export class TeenyiconsPlaySmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlaySmallSolidIcon],svg[teenyicons-play-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.748 5.066A.5.5 0 0 0 6 5.5v4a.5.5 0 0 0 .748.434l3.5-2a.5.5 0 0 0 0-.868z"></svg:path>`,
})
export class TeenyiconsPlaySmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlaySolidIcon],svg[teenyicons-play-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.79 2.093A.5.5 0 0 0 4 2.5v10a.5.5 0 0 0 .79.407l7-5a.5.5 0 0 0 0-.814z"></svg:path>`,
})
export class TeenyiconsPlaySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlugOutlineIcon],svg[teenyicons-plug-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 11.5V15m2-3.5V15m-4-15v4.5m6-4.5v4.5m-8 0h10v3h-1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2h-1z"></svg:path>`,
})
export class TeenyiconsPlugOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlugSolidIcon],svg[teenyicons-plug-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4H5V0H4v4H2v4h1v1.5A2.5 2.5 0 0 0 5.5 12H6v3h1v-3h1v3h1v-3h.5A2.5 2.5 0 0 0 12 9.5V8h1V4h-2V0h-1z"></svg:path>`,
})
export class TeenyiconsPlugSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlusCircleOutlineIcon],svg[teenyicons-plus-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 4v7M4 7.5h7m-3.5 7a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsPlusCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPlusCircleSolidIcon],svg[teenyicons-plus-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M7 11V8H4V7h3V4h1v3h3v1H8v3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPlusCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPngOutlineIcon],svg[teenyicons-png-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 6.5V6H2v.5zm8 4H10v.5h.5zm2 0v.5h.5v-.5zm1-7h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zm-4 6l.447-.224L6 6.5zm-.5 4v.5h1v-.5zm2.5 0l-.447.224A.5.5 0 0 0 9 10.5zm.5-4V6H8v.5zM2.5 7h1V6h-1zm.5 4V8.5H2V11zm0-2.5v-2H2v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5zM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6zM10 6v4.5h1V6zm.5 5h2v-1h-2zm2.5-.5v-2h-1v2zM10.5 7H13V6h-2.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zm5-7v4h1v-4zm.053.224l2 4l.894-.448l-2-4zM8 6.5v4h1v-4z"></svg:path>`,
})
export class TeenyiconsPngOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPngSolidIcon],svg[teenyicons-png-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h.5a.5.5 0 0 0 0-1H3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM2 6h1.5a1.5 1.5 0 1 1 0 3H3v2H2zm8 0h3v1h-2v3h1V8.5h1V11h-3zM7 8.618V11H6V6h1v.382l1 2V6h1v5H8v-.382z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPngSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPoolOutlineIcon],svg[teenyicons-pool-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="M1 12.6c.65.733 1.655 1.4 2.955 1.4c2.954 0 3.545-2 6.5-2c1.359 0 2.6.733 3.545 1.467M2.5 12V3.727C2.5 1.945 3.855.5 5.636.5M9.5 10V3.636C9.5 1.855 10.9.5 12.682.5M2.5 4.5h7m-7 4h7"></svg:path>`,
})
export class TeenyiconsPoolOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPoolSolidIcon],svg[teenyicons-pool-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.636 1C4.15 1 3 2.203 3 3.727V4h6v-.364C9 1.57 10.633 0 12.682 0v1C11.167 1 10 2.14 10 3.636V10H9V9H3v3H2V3.727C2 1.688 3.56 0 5.636 0zM3 8h6V5H3z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.44 13.442c-.895.504-1.877 1.058-3.485 1.058c-1.483 0-2.614-.762-3.33-1.568l.75-.664c.584.66 1.462 1.232 2.58 1.232c1.339 0 2.128-.442 3.004-.935l.01-.007c.895-.504 1.877-1.058 3.485-1.058c1.531 0 2.884.82 3.852 1.572l-.612.79c-.923-.716-2.052-1.362-3.24-1.362c-1.339 0-2.128.442-3.004.935z"></svg:path>`,
})
export class TeenyiconsPoolSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPoundOutlineIcon],svg[teenyicons-pound-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5 14.5l1.103-.367A2.775 2.775 0 0 0 3.5 11.5V4.442A3.94 3.94 0 0 1 7.442.5h.865C9.934.5 11.396 1.49 12 3M3 13h1.084a6 6 0 0 1 2.683.633l.05.025a6 6 0 0 0 5.366 0L13.5 13M1 7.5h8"></svg:path>`,
})
export class TeenyiconsPoundOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPoundSolidIcon],svg[teenyicons-pound-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.442A4.44 4.44 0 0 1 7.442 0h.865a4.48 4.48 0 0 1 4.157 2.814l-.928.372A3.48 3.48 0 0 0 8.307 1h-.865A3.44 3.44 0 0 0 4 4.442V7h5v1H4v3.5c0 .346-.054.683-.156 1h.24a6.5 6.5 0 0 1 2.906.686l.05.025l-.223.447l.223-.447a5.5 5.5 0 0 0 4.92 0l1.316-.658l.448.894l-1.317.659a6.5 6.5 0 0 1-5.814 0l-.05-.025l.224-.448l-.224.448a5.5 5.5 0 0 0-2.46-.581h-.765a3.27 3.27 0 0 1-1.557 1.107l-1.103.367l-.316-.948l1.103-.368A2.275 2.275 0 0 0 3 11.5V8H1V7h2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPoundSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPowerOutlineIcon],svg[teenyicons-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="M7.5 8.5v-8M2.618 2.499A6.96 6.96 0 0 0 .5 7.495c0 3.864 3.135 7.005 7 7.005c3.867 0 7-3.141 7-7.005A6.97 6.97 0 0 0 12.395 2.5"></svg:path>`,
})
export class TeenyiconsPowerOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPowerSolidIcon],svg[teenyicons-power-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0v9H7V0zm4.387 1.792l.358.35A7.47 7.47 0 0 1 15 7.494C15 11.635 11.644 15 7.5 15C3.358 15 0 11.635 0 7.495a7.46 7.46 0 0 1 2.269-5.354l.357-.35l.7.716l-.359.35A6.46 6.46 0 0 0 1 7.494A6.506 6.506 0 0 0 7.5 14c3.59 0 6.5-2.917 6.5-6.505a6.46 6.46 0 0 0-1.955-4.639l-.357-.35z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPowerSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPptOutlineIcon],svg[teenyicons-ppt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 6.5V6H2v.5zm4 0V6H6v.5zm7-3h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zM2.5 7h1V6h-1zm.5 4V8.5H2V11zm0-2.5v-2H2v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5zM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6zm3 0h1V6h-1zm.5 4V8.5H6V11zm0-2.5v-2H6v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 7.5zM7.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 6zM11 6v5h1V6zm-1 1h3V6h-3zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class TeenyiconsPptOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPptSolidIcon],svg[teenyicons-ppt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h.5a.5.5 0 0 0 0-1H3zm4 0h.5a.5.5 0 0 0 0-1H7z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM2 6h1.5a1.5 1.5 0 1 1 0 3H3v2H2zm4 0h1.5a1.5 1.5 0 1 1 0 3H7v2H6zm5 5h1V7h1V6h-3v1h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsPptSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPrintOutlineIcon],svg[teenyicons-print-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 12.5h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2m-8-6v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5m-8 4h8v4h-8z"></svg:path>`,
})
export class TeenyiconsPrintOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPrintSolidIcon],svg[teenyicons-print-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1.5A1.5 1.5 0 0 1 4.5 0h6A1.5 1.5 0 0 1 12 1.5V5H3zM1.5 6A1.5 1.5 0 0 0 0 7.5v4A1.5 1.5 0 0 0 1.5 13H2V9h11v4h.5a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 13.5 6z"></svg:path><svg:path fill="currentColor" d="M3 10h9v5H3z"></svg:path>`,
})
export class TeenyiconsPrintSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPythonOutlineIcon],svg[teenyicons-python-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 2.5h1M4.5 4V1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V11M8 4.5H1.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3m2.5-1h6.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-3m-2.5 9h1"></svg:path>`,
})
export class TeenyiconsPythonOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPythonSolidIcon],svg[teenyicons-python-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12H1.5A1.5 1.5 0 0 1 0 10.5v-5A1.5 1.5 0 0 1 1.5 4H8V3H7V2H6v1H4V1.5A1.5 1.5 0 0 1 5.5 0h4A1.5 1.5 0 0 1 11 1.5v5a.5.5 0 0 1-.5.5h-6A1.5 1.5 0 0 0 3 8.5z"></svg:path><svg:path fill="currentColor" d="M12 3v3.5A1.5 1.5 0 0 1 10.5 8h-6a.5.5 0 0 0-.5.5v5A1.5 1.5 0 0 0 5.5 15h4a1.5 1.5 0 0 0 1.5-1.5V12H9v1H8v-1H7v-1h6.5A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3z"></svg:path>`,
})
export class TeenyiconsPythonSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQrCodeOutlineIcon],svg[teenyicons-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 8.5H8.5V12M14 8.5h1m-3 6H8m3-3h3.5V15M3 3.5h1m7 0h1m-9 8h1M1.5.5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm8 0h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm-8 8h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsQrCodeOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQrCodeSolidIcon],svg[teenyicons-qr-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h4A1.5 1.5 0 0 1 7 1.5v4A1.5 1.5 0 0 1 5.5 7h-4A1.5 1.5 0 0 1 0 5.5zM1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 9.5 0h4A1.5 1.5 0 0 1 15 1.5v4A1.5 1.5 0 0 1 13.5 7h-4A1.5 1.5 0 0 1 8 5.5zM9.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM4 4H3V3h1zm8 0h-1V3h1zM0 9.5A1.5 1.5 0 0 1 1.5 8h4A1.5 1.5 0 0 1 7 9.5v4A1.5 1.5 0 0 1 5.5 15h-4A1.5 1.5 0 0 1 0 13.5zM1.5 9a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM8 8h4v1H9v3H8zm7 1h-1V8h1zM4 12H3v-1h1zm10 0h-3v-1h4v4h-1zm-6 2h4v1H8z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsQrCodeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQuestionCircleOutlineIcon],svg[teenyicons-question-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 9V7.5H8A1.5 1.5 0 0 0 9.5 6v-.1a1.4 1.4 0 0 0-1.4-1.4h-.6A1.5 1.5 0 0 0 6 6m1 4.5h1m-.5 4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsQuestionCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQuestionCircleSolidIcon],svg[teenyicons-question-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M5.5 6a2 2 0 0 1 2-2h.6c1.05 0 1.9.85 1.9 1.9V6a2 2 0 0 1-2 2v1H7V7h1a1 1 0 0 0 1-1v-.1a.9.9 0 0 0-.9-.9h-.6a1 1 0 0 0-1 1zM7 11v-1h1v1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsQuestionCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQuestionOutlineIcon],svg[teenyicons-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 12v-1.264c0-1.37.774-2.623 2-3.236a3.65 3.65 0 0 0 2-3.257C11.5 2.195 9.84.5 7.792.5h-.207c-1.335 0-2.615.53-3.56 1.474L3.5 2.5m3.5 12h1"></svg:path>`,
})
export class TeenyiconsQuestionOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQuestionSmallOutlineIcon],svg[teenyicons-question-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 9V7.5H8A1.5 1.5 0 0 0 9.5 6v-.1a1.4 1.4 0 0 0-1.4-1.4h-.6A1.5 1.5 0 0 0 6 6m1 4.5h1"></svg:path>`,
})
export class TeenyiconsQuestionSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQuestionSmallSolidIcon],svg[teenyicons-question-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 6a2 2 0 0 1 2-2h.6c1.05 0 1.9.85 1.9 1.9V6a2 2 0 0 1-2 2v1H7V7h1a1 1 0 0 0 1-1v-.1a.9.9 0 0 0-.9-.9h-.6a1 1 0 0 0-1 1zM8 10v1H7v-1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsQuestionSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQuestionSolidIcon],svg[teenyicons-question-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.672 1.62A5.53 5.53 0 0 1 7.585 0h.207C10.122 0 12 1.925 12 4.243a4.15 4.15 0 0 1-2.276 3.704A3.12 3.12 0 0 0 8 10.737V12H7v-1.264c0-1.56.881-2.986 2.276-3.683A3.15 3.15 0 0 0 11 4.243C11 2.465 9.558 1 7.792 1h-.207a4.53 4.53 0 0 0-3.206 1.328l-.525.526l-.708-.708zM8 15H7v-1h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsQuestionSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQuoteOutlineIcon],svg[teenyicons-quote-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 6.5h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1zm0 0V10A3.5 3.5 0 0 0 5 13.5m3.5-7h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1zm0 0V10a3.5 3.5 0 0 0 3.5 3.5"></svg:path>`,
})
export class TeenyiconsQuoteOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsQuoteSolidIcon],svg[teenyicons-quote-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 1A1.5 1.5 0 0 0 1 2.5V10a4 4 0 0 0 4 4v-1a3 3 0 0 1-3-3V7h3.5A1.5 1.5 0 0 0 7 5.5v-3A1.5 1.5 0 0 0 5.5 1zm7 0A1.5 1.5 0 0 0 8 2.5V10a4 4 0 0 0 4 4v-1a3 3 0 0 1-3-3V7h3.5A1.5 1.5 0 0 0 14 5.5v-3A1.5 1.5 0 0 0 12.5 1z"></svg:path>`,
})
export class TeenyiconsQuoteSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRandOutlineIcon],svg[teenyicons-rand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 14V8.5m0 0v-7H8a3.5 3.5 0 1 1 0 7zm0 0h5a3 3 0 0 1 3 3V14"></svg:path>`,
})
export class TeenyiconsRandOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRandSolidIcon],svg[teenyicons-rand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1h5a4 4 0 0 1 2.117 7.395A3.5 3.5 0 0 1 12 11.5V14h-1v-2.5A2.5 2.5 0 0 0 8.5 9H4v5H3zm1 7h4a3 3 0 0 0 0-6H4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRandSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsReactOutlineIcon],svg[teenyicons-react-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.5 7.584c0 1.657-3.134 3-7 3s-7-1.343-7-3s3.134-3 7-3s7 1.343 7 3Z"></svg:path><svg:path d="M4.166 13.739c1.457.79 4.13-1.327 5.972-4.726c1.841-3.4 2.153-6.795.696-7.584c-1.457-.79-4.13 1.327-5.972 4.726c-1.841 3.4-2.153 6.795-.696 7.584Z"></svg:path><svg:path d="M10.834 13.739c-1.457.79-4.13-1.327-5.972-4.726c-1.841-3.4-2.153-6.795-.696-7.584c1.457-.79 4.13 1.327 5.972 4.726c1.841 3.4 2.153 6.795.696 7.584Z"></svg:path><svg:path d="M6.5 7.584a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"></svg:path></svg:g>`,
})
export class TeenyiconsReactOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsReactSolidIcon],svg[teenyicons-react-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.315 1.837c-.4-.116-.695-.085-.91.032c-.216.116-.404.347-.526.745c-.122.401-.163.936-.104 1.582q.015.157.037.321a14 14 0 0 1 1.676-.311a13 13 0 0 1 1.275-1.54l-.066-.053c-.508-.402-.98-.66-1.382-.776m2.185.14q-.09-.076-.182-.148C6.746 1.377 6.16 1.04 5.594.876C5.024.711 4.441.711 3.928.99s-.833.767-1.005 1.334c-.172.564-.21 1.238-.144 1.965q.023.255.065.523q-.256.09-.49.192c-.671.287-1.246.642-1.66 1.062C.278 6.487 0 7 0 7.584S.278 8.68.694 9.103c.414.42.989.774 1.66 1.062q.235.1.49.192a9 9 0 0 0-.065.523c-.066.726-.028 1.4.144 1.965c.172.567.492 1.056 1.005 1.333c.513.278 1.097.279 1.666.114c.566-.165 1.152-.5 1.724-.953l.182-.149q.09.076.182.149c.572.452 1.158.788 1.724.953c.569.165 1.153.164 1.666-.114c.513-.277.833-.766 1.005-1.333c.172-.564.21-1.239.144-1.965a9 9 0 0 0-.065-.523q.255-.09.49-.192c.671-.288 1.246-.643 1.66-1.062c.416-.422.694-.936.694-1.52c0-.582-.278-1.096-.694-1.518c-.414-.42-.989-.775-1.66-1.062a9 9 0 0 0-.49-.192q.04-.268.065-.523c.066-.727.028-1.4-.144-1.965c-.172-.567-.492-1.056-1.005-1.334S9.975.711 9.406.876c-.566.164-1.152.5-1.724.953zm0 1.365q-.338.346-.672.755a17 17 0 0 1 1.344 0a11 11 0 0 0-.672-.755m2.012.864c-.41-.574-.84-1.092-1.275-1.54l.065-.053c.51-.402.98-.66 1.383-.776c.399-.116.695-.085.91.032c.216.116.404.347.525.745c.122.401.164.936.105 1.582q-.015.158-.037.32a14 14 0 0 0-1.676-.31m-.563.944a15.6 15.6 0 0 0-2.898 0A15.6 15.6 0 0 0 4.72 7.584a15.7 15.7 0 0 0 1.33 2.433a15.6 15.6 0 0 0 2.9 0a15.6 15.6 0 0 0 1.33-2.433A15.7 15.7 0 0 0 8.95 5.15m1.824 1.138a17 17 0 0 0-.527-.956q.39.075.752.168q-.094.385-.225.788m0 2.591a17 17 0 0 1-.527.957q.39-.075.752-.169a12 12 0 0 0-.225-.788m1.18.487a14 14 0 0 0-.588-1.782c.246-.61.443-1.209.588-1.782q.154.058.3.12c.596.256 1.047.547 1.341.845c.292.296.406.572.406.817s-.114.52-.406.816c-.294.299-.745.59-1.341.846a8 8 0 0 1-.3.12m-.765 1.285a14 14 0 0 1-1.676.311c-.41.574-.84 1.091-1.275 1.54l.066.052c.508.403.98.66 1.382.777c.399.116.695.085.91-.032s.404-.348.525-.746c.123-.4.164-.936.105-1.582a7 7 0 0 0-.037-.32M7.5 11.826q.338-.346.672-.755a17 17 0 0 1-1.344 0q.334.408.672.755m-2.746-1.99a17 17 0 0 1-.527-.957q-.13.404-.225.788q.361.094.752.169m-.942.815a14 14 0 0 0 1.676.311c.41.574.839 1.091 1.275 1.54l-.066.052c-.508.403-.98.66-1.382.777c-.4.116-.695.085-.911-.032s-.403-.348-.525-.746c-.122-.4-.163-.936-.104-1.582a8 8 0 0 1 .037-.32m-.765-1.285c.145-.574.341-1.172.588-1.782a14 14 0 0 1-.588-1.782q-.155.058-.3.12c-.596.256-1.047.547-1.341.845c-.292.296-.406.572-.406.817s.114.52.406.816c.294.299.745.59 1.341.846q.146.061.3.12m.955-3.865q.094.384.225.787a17 17 0 0 1 .527-.956q-.39.075-.752.169M6 7.584a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsReactSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsReceiptOutlineIcon],svg[teenyicons-receipt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5.5V0a.5.5 0 0 0-.5.5zm12 0h.5a.5.5 0 0 0-.5-.5zm0 14l-.224.447A.5.5 0 0 0 14 14.5zm-2-1l.224-.447a.5.5 0 0 0-.448 0zm-2 1l-.224.447a.5.5 0 0 0 .448 0zm-2-1l.224-.447a.5.5 0 0 0-.448 0zm-2 1l-.224.447a.5.5 0 0 0 .448 0zm-4 0H1a.5.5 0 0 0 .724.447zm2-1l.224-.447a.5.5 0 0 0-.448 0zM1.5 1h12V0h-12zM13 .5v14h1V.5zm.724 13.553l-2-1l-.448.894l2 1zm-2.448-1l-2 1l.448.894l2-1zm-1.552 1l-2-1l-.448.894l2 1zm-2.448-1l-2 1l.448.894l2-1zM2 14.5V.5H1v14zm3.724-.447l-2-1l-.448.894l2 1zm-2.448-1l-2 1l.448.894l2-1zM4 5h2V4H4zm4 0h3V4H8zM4 8h2V7H4zm4 0h3V7H8zm0 3h3v-1H8z"></svg:path>`,
})
export class TeenyiconsReceiptOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsReceiptSolidIcon],svg[teenyicons-receipt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.724.447L11.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L7.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L3.5 14.06l-1.776.888A.5.5 0 0 1 1 14.5zM4 5h2V4H4zm4 0h3V4H8zM6 8H4V7h2zm2 0h3V7H8zm3 3H8v-1h3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsReceiptSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRedditOutlineIcon],svg[teenyicons-reddit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 1.5l.121-.485A.5.5 0 0 0 7 1.5zm5.5 8c0 .774-.55 1.641-1.583 2.343C10.4 12.533 8.998 13 7.5 13v1c1.696 0 3.294-.525 4.479-1.33C13.148 11.876 14 10.743 14 9.5zM7.5 13c-1.498 0-2.9-.466-3.917-1.157C2.551 11.14 2 10.273 2 9.5H1c0 1.243.852 2.376 2.021 3.17C4.206 13.475 5.804 14 7.5 14zM2 9.5c0-.774.55-1.641 1.583-2.343C4.6 6.467 6.002 6 7.5 6V5c-1.696 0-3.294.525-4.479 1.33C1.852 7.124 1 8.257 1 9.5zM7.5 6c1.498 0 2.9.467 3.917 1.157C12.449 7.86 13 8.727 13 9.5h1c0-1.243-.852-2.376-2.021-3.17C10.794 5.525 9.196 5 7.5 5zm2.306 4.54c-.69.29-1.32.46-2.306.46v1c1.136 0 1.898-.204 2.694-.54zM7.5 11c-.987 0-1.617-.17-2.306-.46l-.388.92c.796.336 1.558.54 2.694.54zM8 5.5v-4H7v4zm-.621-3.515l4 1l.242-.97l-4-1zM3.974 6.841c-.286-.855-1.12-1.297-1.952-1.297v1c.51 0 .886.261 1.004.615zM2.022 5.544A2.02 2.02 0 0 0 0 7.566h1a1.02 1.02 0 0 1 1.022-1.022zM0 7.566C0 8.589.76 9.424 1.74 9.56l.139-.99A1.016 1.016 0 0 1 1 7.565zm11.974-.407c.118-.354.493-.615 1.004-.615v-1c-.832 0-1.666.442-1.952 1.297zm1.004-.615A1.02 1.02 0 0 1 14 7.566h1a2.02 2.02 0 0 0-2.022-2.022zM14 7.566c0 .511-.38.934-.879 1.004l.139.99A2.016 2.016 0 0 0 15 7.567zM12.5 3a.5.5 0 0 1-.5-.5h-1A1.5 1.5 0 0 0 12.5 4zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 14 2.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 12.5 1zm0-1A1.5 1.5 0 0 0 11 2.5h1a.5.5 0 0 1 .5-.5zM5 9h1V8H5zm4 0h1V8H9z"></svg:path>`,
})
export class TeenyiconsRedditOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRedditSolidIcon],svg[teenyicons-reddit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.621 1.015A.5.5 0 0 0 7 1.5v3.515A8.16 8.16 0 0 0 3.455 6.06c-.388-.341-.911-.515-1.433-.515A2.02 2.02 0 0 0 0 7.566c0 .747.406 1.394 1.007 1.742A3 3 0 0 0 1 9.5c0 1.243.852 2.376 2.021 3.17C4.206 13.475 5.804 14 7.5 14s3.294-.525 4.479-1.33C13.148 11.876 14 10.743 14 9.5q0-.096-.007-.192A2.01 2.01 0 0 0 15 7.566a2.02 2.02 0 0 0-2.022-2.022c-.522 0-1.045.174-1.433.515A8.16 8.16 0 0 0 8 5.015V2.14l3.055.764a1.5 1.5 0 1 0 .074-1.012zM12.5 3a.5.5 0 0 1-.5-.492v-.016a.5.5 0 1 1 .5.508M5 9h1V8H5zm2.5 2c-.987 0-1.617-.17-2.306-.46l-.388.92c.796.336 1.558.54 2.694.54s1.898-.204 2.694-.54l-.388-.92c-.69.29-1.32.46-2.306.46M10 9H9V8h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRedditSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRedwoodjsOutlineIcon],svg[teenyicons-redwoodjs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5.5l.248-.434a.5.5 0 0 0-.496 0zM4 2.5l-.248-.434a.5.5 0 0 0-.142.122zM2 5l-.39-.312a.5.5 0 0 0-.09.175zM1 8.5l-.48-.137a.5.5 0 0 0 .033.36zm2 4l-.447.224a.5.5 0 0 0 .244.233zm4.5 2l-.203.457a.5.5 0 0 0 .406 0zm4.5-2l.203.457a.5.5 0 0 0 .244-.233zm2-4l.447.224a.5.5 0 0 0 .034-.361zM13 5l.48-.137a.5.5 0 0 0-.09-.175zm-2-2.5l.39-.312a.5.5 0 0 0-.142-.122zM7.252.066l-3.5 2l.496.868l3.5-2zM3.61 2.188l-2 2.5l.78.624l2-2.5zM1.52 4.863l-1 3.5l.96.274l1-3.5zm-.967 3.86l2 4l.894-.447l-2-4zm2.244 4.234l4.5 2l.406-.914l-4.5-2zm4.906 2l4.5-2l-.406-.914l-4.5 2zm4.744-2.233l2-4l-.894-.448l-2 4zm2.034-4.361l-1-3.5l-.962.274l1 3.5zm-1.09-3.675l-2-2.5l-.781.624l2 2.5zm-2.143-2.622l-3.5-2l-.496.868l3.5 2zm-8.011.86l10.5 6.5l.526-.851l-10.5-6.5zm8-.851l-10.5 6.5l.526.85l10.5-6.5zm-9.59 3.279l5.5 5.5l.707-.708l-5.5-5.5zm5.63 5.593l4 2l.447-.894l-4-2zm5.37-6.3l-5.5 5.5l.707.707l5.5-5.5zm-5.37 5.406l-4 2l.447.894l4-2z"></svg:path>`,
})
export class TeenyiconsRedwoodjsOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRedwoodjsSolidIcon],svg[teenyicons-redwoodjs-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.252.066a.5.5 0 0 1 .496 0l3.36 1.92L7.5 4.337L3.893 1.985zM3.185 2.718L1.96 4.25L4.2 6.49l2.386-1.556zM1.438 5.146L.52 8.363a.5.5 0 0 0 .034.36l.054.11l2.735-1.784zm-.38 4.587l1.371 2.743l4.227-2.113l-2.591-2.591zm2.219 3.437l4.02 1.787a.5.5 0 0 0 .406 0l4.02-1.787L7.5 11.06zm9.293-.694l1.372-2.743l-3.007-1.961l-2.59 2.591zm1.823-3.643l.054-.11a.5.5 0 0 0 .034-.36l-.92-3.217l-1.903 1.903zm-1.351-4.582l-1.227-1.533l-3.4 2.217l2.387 1.556zM7.5 5.532l2.58 1.682L7.5 9.793l-2.58-2.58z"></svg:path>`,
})
export class TeenyiconsRedwoodjsSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRefreshAltOutlineIcon],svg[teenyicons-refresh-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 7.5A7 7 0 0 1 13 3.17m1.5 4.33A7 7 0 0 1 2 11.83m3-.33H1.5V15m12-15v3.5H10"></svg:path>`,
})
export class TeenyiconsRefreshAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRefreshAltSolidIcon],svg[teenyicons-refresh-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1A6.5 6.5 0 0 0 1 7.5H0a7.5 7.5 0 0 1 13-5.1V0h1v4h-4V3h2.19A6.48 6.48 0 0 0 7.5 1m0 13A6.5 6.5 0 0 0 14 7.5h1a7.5 7.5 0 0 1-13 5.099V15H1v-4h4v1H2.81a6.48 6.48 0 0 0 4.69 2" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRefreshAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRefreshOutlineIcon],svg[teenyicons-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 14.5A7 7 0 0 1 3.17 2M7.5.5A7 7 0 0 1 11.83 13m-.33-3v3.5H15M0 1.5h3.5V5"></svg:path>`,
})
export class TeenyiconsRefreshOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRefreshSolidIcon],svg[teenyicons-refresh-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7.5A6.5 6.5 0 0 0 7.5 1V0a7.5 7.5 0 0 1 5.099 13H15v1h-4v-4h1v2.19a6.48 6.48 0 0 0 2-4.69M2.4 2H0V1h4v4H3V2.81A6.5 6.5 0 0 0 7.5 14v1A7.5 7.5 0 0 1 2.4 2" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRefreshSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRewindCircleOutlineIcon],svg[teenyicons-rewind-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5.5H7a.5.5 0 0 0-.748-.434zm0 4l-.248.434A.5.5 0 0 0 7 9.5zM3 7.5l-.248-.434a.5.5 0 0 0 0 .868zm7.5-2h.5a.5.5 0 0 0-.748-.434zm0 4l-.248.434A.5.5 0 0 0 11 9.5zM7 7.5l-.248-.434a.5.5 0 0 0 0 .868zm.5 7.5A7.5 7.5 0 0 0 15 7.5h-1A6.5 6.5 0 0 1 7.5 14zM0 7.5A7.5 7.5 0 0 0 7.5 15v-1A6.5 6.5 0 0 1 1 7.5zM7.5 0A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zm0 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zM6 5.5v4h1v-4zm.748 3.566l-3.5-2l-.496.868l3.5 2zm-3.5-1.132l3.5-2l-.496-.868l-3.5 2zM10 5.5v4h1v-4zm.748 3.566l-3.5-2l-.496.868l3.5 2zm-3.5-1.132l3.5-2l-.496-.868l-3.5 2z"></svg:path>`,
})
export class TeenyiconsRewindCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRewindCircleSolidIcon],svg[teenyicons-rewind-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 7.5a7.5 7.5 0 1 0-15 0a7.5 7.5 0 0 0 15 0m-4.249-2.432a.5.5 0 0 0-.5-.002L7 6.924V5.5a.5.5 0 0 0-.748-.434l-3.5 2a.5.5 0 0 0 0 .868l3.5 2A.5.5 0 0 0 7 9.5V8.076l3.252 1.858A.5.5 0 0 0 11 9.5v-4a.5.5 0 0 0-.249-.432" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRewindCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRewindOutlineIcon],svg[teenyicons-rewind-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14.5 12.5v-10l-7 5zm-7 0v-10l-7 5z"></svg:path>`,
})
export class TeenyiconsRewindOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRewindSmallOutlineIcon],svg[teenyicons-rewind-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5 9.5v-4L3 7.5zm4 0v-4L7 7.5z"></svg:path>`,
})
export class TeenyiconsRewindSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRewindSmallSolidIcon],svg[teenyicons-rewind-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.5a.5.5 0 0 0-.748-.434l-3.5 2a.5.5 0 0 0 0 .868l3.5 2A.5.5 0 0 0 7 9.5V8.076l3.252 1.858A.5.5 0 0 0 11 9.5v-4a.5.5 0 0 0-.748-.434L7 6.924z"></svg:path>`,
})
export class TeenyiconsRewindSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRewindSolidIcon],svg[teenyicons-rewind-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2.5a.5.5 0 0 0-.79-.407l-7 5a.5.5 0 0 0 0 .814l7 5A.5.5 0 0 0 8 12.5V8.472l6.21 4.435A.5.5 0 0 0 15 12.5v-10a.5.5 0 0 0-.79-.407L8 6.528z"></svg:path>`,
})
export class TeenyiconsRewindSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRightCircleOutlineIcon],svg[teenyicons-right-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.146 10.146l-.353.354l.707.707l.354-.353zM9.5 7.5l.354.354l.353-.354l-.353-.354zM6.854 4.146L6.5 3.793l-.707.707l.353.354zm0 6.708l3-3l-.708-.708l-3 3zm3-3.708l-3-3l-.708.708l3 3zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zm0 1A7.5 7.5 0 0 0 15 7.5h-1A6.5 6.5 0 0 1 7.5 14z"></svg:path>`,
})
export class TeenyiconsRightCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRightCircleSolidIcon],svg[teenyicons-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 7.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0M6 3.293L10.207 7.5L6 11.707z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRightCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRightOutlineIcon],svg[teenyicons-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="m5 14l7-6.5L5 1"></svg:path>`,
})
export class TeenyiconsRightOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRightSmallOutlineIcon],svg[teenyicons-right-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="m6.5 10.5l3-3l-3-3"></svg:path>`,
})
export class TeenyiconsRightSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRightSmallSolidIcon],svg[teenyicons-right-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.207 7.5L6 3.293v8.414z"></svg:path>`,
})
export class TeenyiconsRightSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRightSolidIcon],svg[teenyicons-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5L4 0v15z"></svg:path>`,
})
export class TeenyiconsRightSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRippleOutlineIcon],svg[teenyicons-ripple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m1.5 1.5l3.06 3.316a4 4 0 0 0 5.88 0L13.5 1.5m-12 12l3.06-3.316a4 4 0 0 1 5.88 0L13.5 13.5"></svg:path>`,
})
export class TeenyiconsRippleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRippleSolidIcon],svg[teenyicons-ripple-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.193 5.155l-3.06-3.316l.734-.678l3.061 3.316a3.5 3.5 0 0 0 5.144 0l3.06-3.316l.735.678l-3.06 3.316a4.5 4.5 0 0 1-6.614 0m5.879 5.368a3.5 3.5 0 0 0-5.144 0l-3.06 3.316l-.735-.678l3.06-3.316a4.5 4.5 0 0 1 6.614 0l3.06 3.316l-.734.678z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRippleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRobotOutlineIcon],svg[teenyicons-robot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 2.5a5 5 0 0 1 5 5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a5 5 0 0 1 5-5Zm0 0V0M4 11.5h7M.5 8v4m14-4v4m-9-2.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"></svg:path>`,
})
export class TeenyiconsRobotOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRobotSolidIcon],svg[teenyicons-robot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m4 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.022A5.5 5.5 0 0 1 13 7.5v6a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 13.5v-6a5.5 5.5 0 0 1 5-5.478V0h1zM5.5 7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m4 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m1.5 5H4v-1h7z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M0 8v4h1V8zm15 0h-1v4h1z"></svg:path>`,
})
export class TeenyiconsRobotSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRollerOutlineIcon],svg[teenyicons-roller-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.05 7.914l-.138-.48zM8.224 9.293l.138.48zM5.5 11.5V11a.5.5 0 0 0-.5.5zm4 0h.5a.5.5 0 0 0-.5-.5zm0 3v.5a.5.5 0 0 0 .5-.5zm-4 0H5a.5.5 0 0 0 .5.5zM1.5 1h10V0h-10zm10.5.5v2h1v-2zM11.5 4h-10v1h10zM1 3.5v-2H0v2zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 5zM12 3.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 13 3.5zM11.5 1a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 11.5 0zm-10-1A1.5 1.5 0 0 0 0 1.5h1a.5.5 0 0 1 .5-.5zM14 4.5v1.491h1V4.5zm-1.088 2.934L8.088 8.812l.275.962l4.824-1.379zM7 10.254V11.5h1v-1.246zm1.088-1.442A1.5 1.5 0 0 0 7 10.254h1a.5.5 0 0 1 .363-.48zM14 5.992a1.5 1.5 0 0 1-1.088 1.442l.275.961A2.5 2.5 0 0 0 15 5.991zM12.5 3A1.5 1.5 0 0 1 14 4.5h1A2.5 2.5 0 0 0 12.5 2zm-7 9h4v-1h-4zm3.5-.5v3h1v-3zm.5 2.5h-4v1h4zm-3.5.5v-3H5v3z"></svg:path>`,
})
export class TeenyiconsRollerOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRollerSolidIcon],svg[teenyicons-roller-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h10A1.5 1.5 0 0 1 13 1.5v.55a2.5 2.5 0 0 1 2 2.45v1.491a2.5 2.5 0 0 1-1.813 2.404L8.363 9.774a.5.5 0 0 0-.363.48V11h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H7v-.746a1.5 1.5 0 0 1 1.088-1.442l4.824-1.378A1.5 1.5 0 0 0 14 5.99V4.5a1.5 1.5 0 0 0-1-1.415V3.5A1.5 1.5 0 0 1 11.5 5h-10A1.5 1.5 0 0 1 0 3.5z"></svg:path>`,
})
export class TeenyiconsRollerSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRollupjsOutlineIcon],svg[teenyicons-rollupjs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5.5V0a.5.5 0 0 0-.5.5zm12 14v.5a.5.5 0 0 0 .455-.707zm-2.488-5.474l-.224-.447a.5.5 0 0 0-.231.654zM7.36 2.78l.447.224zM4.765 14.058l-.428-.258zM8.772 3.317l.475-.158zm.457 1.371l-.474.158zm2.235-.295l-.474.158zm-2.487-2.61l.417.278zm1.362 3.885l.098-.49zM1 .5v12h1V.5zM3.5 15h10v-1h-10zm10.455-.707L11.467 8.82l-.91.414l2.488 5.474zM1.5 1H9V0H1.5zM13 5a4 4 0 0 1-2.212 3.58l.448.893A5 5 0 0 0 14 5zM9 1a4 4 0 0 1 4 4h1a5 5 0 0 0-5-5zM1 12.5A2.5 2.5 0 0 0 3.5 15v-1A1.5 1.5 0 0 1 2 12.5zm1.447 1.224l5.36-10.72l-.894-.447l-5.36 10.72zm5.36-10.72a2.84 2.84 0 0 1 2.624-1.568l.03-1a3.84 3.84 0 0 0-3.548 2.12zM4.929 14.757l.265-.442l-.857-.515l-.266.443zm.265-.442a59 59 0 0 1 6.182-8.486l-.752-.658a60 60 0 0 0-6.287 8.63zm3.104-10.84l.457 1.371l.949-.316l-.457-1.371zm3.64.76l-.464-1.393l-.948.316l.464 1.393zM10.443.5a2.26 2.26 0 0 0-1.88 1.006l.832.555a1.26 1.26 0 0 1 1.048-.561zm-.201 5.658a1.483 1.483 0 0 0 1.698-1.923l-.949.316c.117.352-.19.7-.553.627zM8.755 4.846a1.97 1.97 0 0 0 1.486 1.312l.196-.98a.97.97 0 0 1-.733-.648zm.492-1.687a1.26 1.26 0 0 1 .147-1.098l-.833-.555a2.26 2.26 0 0 0-.263 1.969zm1.184-1.723a.44.44 0 0 1-.25-.09a.48.48 0 0 1-.186-.41c.026-.385.382-.436.447-.436v1c.132 0 .523-.082.551-.497a.53.53 0 0 0-.207-.454a.56.56 0 0 0-.325-.112z"></svg:path>`,
})
export class TeenyiconsRollupjsOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRollupjsSolidIcon],svg[teenyicons-rollupjs-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 .5a.5.5 0 0 1 .5-.5H9c.782 0 1.523.18 2.182.5h-.135a3.84 3.84 0 0 0-4.134 2.057L1.325 13.733A2.5 2.5 0 0 1 1 12.5z"></svg:path><svg:path fill="currentColor" d="M4.87 15h8.63a.5.5 0 0 0 .455-.707l-2.298-5.057A5 5 0 0 0 14 5a4.98 4.98 0 0 0-1.43-3.5h-2.128a1.26 1.26 0 0 0-1.195 1.659l.457 1.371c.11.332.39.579.733.648a.5.5 0 0 0 .178.002l.009-.01l.007.007a.484.484 0 0 0 .359-.626l-.464-1.393l.948-.316l.465 1.393a1.48 1.48 0 0 1-.736 1.793a55 55 0 0 0-5.95 8.315z"></svg:path>`,
})
export class TeenyiconsRollupjsSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRouterOutlineIcon],svg[teenyicons-router-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 9.5V9H1v.5zm12 0h.5V9h-.5zm0 5v.5h.5v-.5zm-12 0H1v.5h.5zm1.72-8.339C4.373 4.761 5.916 4 7.5 4V3c-1.917 0-3.732.924-5.052 2.525zM7.5 4c1.583 0 3.126.762 4.281 2.161l.771-.636C11.232 3.924 9.417 3 7.5 3zm-6.614.318C2.658 2.17 5.04 1 7.5 1V0C4.71 0 2.055 1.33.114 3.682zM7.5 1c2.46 0 4.842 1.17 6.614 3.318l.772-.636C12.945 1.329 10.29 0 7.5 0zM7 6v3h1V6zm-5.5 4h12V9h-12zM13 9.5v5h1v-5zm.5 4.5h-12v1h12zM2 14.5v-5H1v5z"></svg:path>`,
})
export class TeenyiconsRouterOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRouterSolidIcon],svg[teenyicons-router-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1C5.04 1 2.658 2.17.886 4.318l-.772-.636C2.055 1.329 4.71 0 7.5 0s5.445 1.33 7.386 3.682l-.772.636C12.342 2.17 9.96 1 7.5 1m0 3c-1.583 0-3.126.762-4.28 2.161l-.772-.636C3.768 3.924 5.583 3 7.5 3s3.732.924 5.052 2.525l-.771.636C10.626 4.761 9.083 4 7.5 4M7 9V6h1v3h6v6H1V9z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRouterSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRssOutlineIcon],svg[teenyicons-rss-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 13.5a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm14 1.5C14.5 6.992 8.008.5 0 .5m0 6A8.5 8.5 0 0 1 8.5 15"></svg:path>`,
})
export class TeenyiconsRssOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRssSolidIcon],svg[teenyicons-rss-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15C14 7.268 7.732 1 0 1V0c8.284 0 15 6.716 15 15z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 13.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 15a9 9 0 0 0-9-9v1a8 8 0 0 1 8 8z"></svg:path>`,
})
export class TeenyiconsRssSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRubyOutlineIcon],svg[teenyicons-ruby-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 14.5v.5h.5v-.5zm0-14h.5V0h-.5zm-6 0V0h-.207l-.147.146zm-8 8l-.354-.354L0 8.293V8.5zm0 6H0v.5h.5zm4-4l-.224.447l.019.01l.02.007zm0-6V4a.5.5 0 0 0-.5.5zm6 0l.464-.186l-.008-.019l-.009-.019zm4.5 10V.5h-1v14zM14.5 0h-6v1h6zM8.146.146l-8 8l.708.708l8-8zM0 8.5v6h1v-6zM.5 15h14v-1H.5zM14.146.146l-14 14l.708.708l14-14zM5 10.5v-6H4v6zM4.5 5h6V4h-6zm-.186 5.964l10 4l.372-.928l-10-4zm5.722-6.278l4 10l.928-.372l-4-10zM8.053.724l2 4l.894-.448l-2-4zM.276 8.947l4 2l.448-.894l-4-2z"></svg:path>`,
})
export class TeenyiconsRubyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRubySolidIcon],svg[teenyicons-ruby-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.293 4L8.058.236L9.73 4zm10-4l-3.632 3.632L9.047 0zM.236 8.058L4 9.73V4.293zm3.396 2.603L0 9.047v5.246zM5 9.293L9.293 5H5zm10 4.438l-3.907-9.117L15 .707zm-.952.317l-3.717-8.672l-4.955 4.955zm-9.434-2.955L13.731 15H.707z"></svg:path>`,
})
export class TeenyiconsRubySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRupeeOutlineIcon],svg[teenyicons-rupee-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8.5V8a.5.5 0 0 0-.325.88zM2 1h11V0H2zm.5 8h3V8h-3zm3-9h-3v1h3zM2.175 8.88l7 6l.65-.76l-7-6zM10 4.5A4.5 4.5 0 0 0 5.5 0v1A3.5 3.5 0 0 1 9 4.5zM5.5 9A4.5 4.5 0 0 0 10 4.5H9A3.5 3.5 0 0 1 5.5 8zM2 5h11V4H2z"></svg:path>`,
})
export class TeenyiconsRupeeOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRupeeSolidIcon],svg[teenyicons-rupee-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1V0h11v1H8.329a4.5 4.5 0 0 1 1.644 3H13v1H9.973A4.5 4.5 0 0 1 5.5 9H3.852l5.973 5.12l-.65.76l-7-6A.5.5 0 0 1 2.5 8h3a3.5 3.5 0 0 0 3.465-3H2V4h6.965A3.5 3.5 0 0 0 5.5 1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRupeeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRustOutlineIcon],svg[teenyicons-rust-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2 10.5h5m-4.5-6H9a1.5 1.5 0 1 1 0 3H4.5m0-3v6m3-3h1a2 2 0 0 1 2 2a1 1 0 0 0 1 1H13M7.5.5l1.344 1.11l1.693-.417l.73 1.584l1.706.359l-.03 1.743l1.382 1.063L13.54 7.5l.784 1.558l-1.382 1.063l.03 1.743l-1.707.359l-.729 1.584l-1.693-.418L7.5 14.5l-1.344-1.11l-1.693.417l-.73-1.584l-1.706-.359l.03-1.743L.675 9.058L1.46 7.5L.675 5.942L2.057 4.88l-.03-1.743l1.706-.359l.73-1.584l1.693.417z"></svg:path>`,
})
export class TeenyiconsRustOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRustSolidIcon],svg[teenyicons-rust-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.174.115a.52.52 0 0 1 .652 0l1.178.95l1.483-.357a.516.516 0 0 1 .588.276l.64 1.355l1.494.307c.24.05.411.258.407.498l-.027 1.492l1.211.91a.49.49 0 0 1 .145.621L14.26 7.5l.686 1.333a.49.49 0 0 1-.145.62l-.726.547h-2.478a.506.506 0 0 1-.512-.5a2.47 2.47 0 0 0-.861-1.87c.521-.363.86-.958.86-1.63c0-1.105-.916-2-2.047-2H1.399l-.015-.856a.5.5 0 0 1 .407-.498l1.495-.307l.639-1.355a.516.516 0 0 1 .588-.276l1.483.357z"></svg:path><svg:path fill="currentColor" d="M.926 5L.2 5.546a.49.49 0 0 0-.145.621L.74 7.5L.055 8.833a.49.49 0 0 0 .145.62L.926 10h2.99V5z"></svg:path><svg:path fill="currentColor" d="m1.4 11l-.016.856a.5.5 0 0 0 .407.498l1.495.307l.639 1.355c.103.218.35.334.588.276l1.483-.357l1.178.95a.52.52 0 0 0 .652 0l1.178-.95l1.483.357a.516.516 0 0 0 .588-.276l.64-1.355l1.494-.307a.504.504 0 0 0 .407-.498L13.6 11h-2.005c-.848 0-1.536-.672-1.536-1.5S9.372 8 8.524 8H4.94v2h2.048v1zm7.636-4H4.94V5h4.096c.565 0 1.024.448 1.024 1S9.6 7 9.036 7"></svg:path>`,
})
export class TeenyiconsRustSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSafariOutlineIcon],svg[teenyicons-safari-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 11.5l-.429-.257a.5.5 0 0 0 .686.686zm3-5l-.257-.429l-.107.065l-.065.107zm5-3l.429.257a.5.5 0 0 0-.686-.686zm-3 5l.257.429l.107-.065l.065-.107zm5.5-1A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zM3.929 11.757l3-5l-.858-.514l-3 5zM6.757 6.93l5-3l-.514-.858l-5 3zm4.314-3.686l-3 5l.858.514l3-5zM8.243 8.07l-5 3l.514.858l5-3z"></svg:path>`,
})
export class TeenyiconsSafariOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSafariSolidIcon],svg[teenyicons-safari-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.958 10.042l1.906-3.178l3.178-1.906l-1.906 3.178z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5A7.5 7.5 0 0 1 7.5 0A7.5 7.5 0 0 1 15 7.5A7.5 7.5 0 0 1 7.5 15A7.5 7.5 0 0 1 0 7.5m11.929-3.743a.5.5 0 0 0-.686-.686L6.136 6.136L3.07 11.243a.5.5 0 0 0 .686.686l5.107-3.065z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSafariSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSafeOutlineIcon],svg[teenyicons-safe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 3v3m0 2v3m0 2.5V15m10-1.5V15m-3-5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-8-9h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsSafeOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSafeSolidIcon],svg[teenyicons-safe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14H2v1h1v-1h9v1h1v-1h.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 0zM2 3v3h1V3zm7.5 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M2 11V8h1v3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSafeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSaveOutlineIcon],svg[teenyicons-save-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 14.5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3m3 0h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h8.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V13.5a1 1 0 0 1-1 1Z"></svg:path>`,
})
export class TeenyiconsSaveOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSaveSolidIcon],svg[teenyicons-save-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8.586a1.5 1.5 0 0 1 1.06.44l3.415 3.414A1.5 1.5 0 0 1 15 4.914V13.5a1.5 1.5 0 0 1-1.5 1.5H11v-3.5A1.5 1.5 0 0 0 9.5 10h-4A1.5 1.5 0 0 0 4 11.5V15H1.5A1.5 1.5 0 0 1 0 13.5z"></svg:path><svg:path fill="currentColor" d="M5 15h5v-3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5z"></svg:path>`,
})
export class TeenyiconsSaveSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScanOutlineIcon],svg[teenyicons-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 5V2.5a2 2 0 0 1 2-2H5m5 0h2.5a2 2 0 0 1 2 2V5m-14 5v2.5a2 2 0 0 0 2 2H5m9.5-4.5v2.5a2 2 0 0 1-2 2H10m-8-7h11"></svg:path>`,
})
export class TeenyiconsScanOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScanSolidIcon],svg[teenyicons-scan-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 1A1.5 1.5 0 0 0 1 2.5V5H0V2.5A2.5 2.5 0 0 1 2.5 0H5v1zm10 0H10V0h2.5A2.5 2.5 0 0 1 15 2.5V5h-1V2.5A1.5 1.5 0 0 0 12.5 1m.5 7H2V7h11zM0 12.5V10h1v2.5A1.5 1.5 0 0 0 2.5 14H5v1H2.5A2.5 2.5 0 0 1 0 12.5m14 0V10h1v2.5a2.5 2.5 0 0 1-2.5 2.5H10v-1h2.5a1.5 1.5 0 0 0 1.5-1.5" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsScanSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSchoolOutlineIcon],svg[teenyicons-school-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m7.5 4.5l4 2v8h-8v-8zm0 0V0M0 14.5h15m-13.5 0v-6h2m10 6v-6h-2m-5 6v-3h2v3m-1-14h3v2h-3m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"></svg:path>`,
})
export class TeenyiconsSchoolOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSchoolSolidIcon],svg[teenyicons-school-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 8a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12 6.191l-4-2V3h3V0H7v4.191l-4 2V8H1v6H0v1h6v-4h3v4h6v-1h-1V8h-2zM13 14V9h-1v5zM3 14H2V9h1zm3-5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 15v-3H7v3z"></svg:path>`,
})
export class TeenyiconsSchoolSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScreenAlt2OutlineIcon],svg[teenyicons-screen-alt-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 14.5h11m-7.5-4v4m4-4v4m-9-13v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1Z"></svg:path>`,
})
export class TeenyiconsScreenAlt2OutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScreenAlt2SolidIcon],svg[teenyicons-screen-alt-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v8A1.5 1.5 0 0 0 1.5 11H5v3H2v1h11v-1h-3v-3h3.5A1.5 1.5 0 0 0 15 9.5v-8A1.5 1.5 0 0 0 13.5 0zM6 14v-3h3v3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsScreenAlt2SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScreenAltOutlineIcon],svg[teenyicons-screen-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 14.5h11m-5.5-4v4m-7-13v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1Z"></svg:path>`,
})
export class TeenyiconsScreenAltOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScreenAltSolidIcon],svg[teenyicons-screen-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v8A1.5 1.5 0 0 0 1.5 11H7v3H2v1h11v-1H8v-3h5.5A1.5 1.5 0 0 0 15 9.5v-8A1.5 1.5 0 0 0 13.5 0z"></svg:path>`,
})
export class TeenyiconsScreenAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScreenOutlineIcon],svg[teenyicons-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 14.5h7M.5 2.5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1Z"></svg:path>`,
})
export class TeenyiconsScreenOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScreenSolidIcon],svg[teenyicons-screen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 1A1.5 1.5 0 0 0 0 2.5v8A1.5 1.5 0 0 0 1.5 12h12a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 1zM4 15h7v-1H4z"></svg:path>`,
})
export class TeenyiconsScreenSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScribbleOutlineIcon],svg[teenyicons-scribble-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 5C3 2 7.3.5 6.5 2.5C5.5 5-.5 9.5 3 11c1.343.576 3.055.45 4.654-.05m0 0C10.222 10.145 12.5 8.377 12.5 7C12.5 4.5 9 5.5 8 9c-.206.722-.328 1.381-.346 1.95Zm0 0C7.584 13.133 9.032 13.983 13 12"></svg:path>`,
})
export class TeenyiconsScribbleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsScribbleSolidIcon],svg[teenyicons-scribble-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.06 2.334c-1.077.463-2.426 1.515-3.113 2.89l-.894-.448c.813-1.625 2.364-2.823 3.612-3.36c.316-.136.626-.236.912-.287c.278-.05.571-.061.833.017a.92.92 0 0 1 .645.619c.091.3.028.623-.09.92c-.284.708-.897 1.514-1.538 2.302q-.295.361-.596.723a36 36 0 0 0-1.365 1.71c-.593.811-.972 1.501-1.04 2.034c-.032.247.007.434.103.588c.1.16.293.338.668.498c1.104.474 2.543.426 3.98.028a9.7 9.7 0 0 1 .342-1.705c.536-1.876 1.757-3.141 2.93-3.581c.583-.219 1.223-.254 1.743.053c.542.32.808.924.808 1.665c0 .48-.196.947-.483 1.367c-.29.424-.692.834-1.164 1.213c-.86.69-1.99 1.308-3.195 1.73c.02.326.086.581.186.77c.123.234.31.394.603.476c.313.088.77.092 1.418-.062c.643-.154 1.44-.456 2.411-.941l.448.894c-1.013.507-1.885.842-2.627 1.02c-.738.175-1.382.202-1.92.052a1.92 1.92 0 0 1-1.218-.972a2.7 2.7 0 0 1-.279-.946c-1.483.37-3.064.421-4.377-.142c-.5-.214-.885-.505-1.123-.888c-.242-.389-.3-.819-.246-1.244c.103-.81.63-1.683 1.225-2.497c.43-.59.939-1.201 1.425-1.786q.294-.353.567-.688c.656-.805 1.168-1.499 1.385-2.042a.8.8 0 0 0 .06-.216a1 1 0 0 0-.343.015a3.3 3.3 0 0 0-.693.221m3.172 7.88c.952-.375 1.825-.876 2.495-1.414c.419-.336.745-.676.964-.996C11.91 7.48 12 7.209 12 7c0-.509-.171-.718-.317-.804c-.168-.099-.465-.134-.882.022c-.827.31-1.856 1.295-2.32 2.92a10 10 0 0 0-.249 1.077" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsScribbleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSdCardOutlineIcon],svg[teenyicons-sd-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 3v3m2-3v3m2-3v3m-8 8.5h10a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-7l-4 4v9a1 1 0 0 0 1 1Z"></svg:path>`,
})
export class TeenyiconsSdCardOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSdCardSolidIcon],svg[teenyicons-sd-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.293 0H12.5A1.5 1.5 0 0 1 14 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5V4.293zM6 3v3h1V3zm2 0v3h1V3zm2 3V3h1v3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSdCardSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchCircleOutlineIcon],svg[teenyicons-search-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8.5 8.5l2 2M7 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Zm.5 5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsSearchCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchCircleSolidIcon],svg[teenyicons-search-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M7 4a3 3 0 1 0 1.738 5.445l1.409 1.409l.707-.707l-1.409-1.409A3 3 0 0 0 7 4" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSearchCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchOutlineIcon],svg[teenyicons-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"></svg:path>`,
})
export class TeenyiconsSearchOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchPropertyOutlineIcon],svg[teenyicons-search-property-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 8.5H4a.5.5 0 0 0 .5.5zm4 0V9a.5.5 0 0 0 .5-.5zm0-2.5H9a.5.5 0 0 0-.146-.354zm-2-2l.354-.354a.5.5 0 0 0-.708 0zm-2 2l-.354-.354A.5.5 0 0 0 4 6zm10.354 8.146l-4-4l-.708.708l4 4zM6.5 12A5.5 5.5 0 0 1 1 6.5H0A6.5 6.5 0 0 0 6.5 13zM12 6.5A5.5 5.5 0 0 1 6.5 12v1A6.5 6.5 0 0 0 13 6.5zM6.5 1A5.5 5.5 0 0 1 12 6.5h1A6.5 6.5 0 0 0 6.5 0zm0-1A6.5 6.5 0 0 0 0 6.5h1A5.5 5.5 0 0 1 6.5 1zm-2 9h4V8h-4zM9 8.5V6H8v2.5zm-.146-2.854l-2-2l-.708.708l2 2zm-2.708-2l-2 2l.708.708l2-2zM4 6v2.5h1V6z"></svg:path>`,
})
export class TeenyiconsSearchPropertyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchPropertySolidIcon],svg[teenyicons-search-property-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8V6.207l1.5-1.5l1.5 1.5V8z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 6.5a6.5 6.5 0 1 1 11.436 4.23l3.418 3.416l-.707.707l-3.418-3.417A6.5 6.5 0 0 1 0 6.5m8.854-.854l-2-2a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 4 6v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.146-.354" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSearchPropertySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchSmallOutlineIcon],svg[teenyicons-search-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8.5 8.5l2 2M7 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"></svg:path>`,
})
export class TeenyiconsSearchSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchSmallSolidIcon],svg[teenyicons-search-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a3 3 0 1 0 1.738 5.445l1.408 1.409l.708-.708l-1.409-1.408A3 3 0 0 0 7 4"></svg:path>`,
})
export class TeenyiconsSearchSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchSolidIcon],svg[teenyicons-search-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 0a6.5 6.5 0 1 0 4.23 11.436l3.416 3.418l.708-.708l-3.418-3.417A6.5 6.5 0 0 0 6.5 0"></svg:path>`,
})
export class TeenyiconsSearchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSectionAddOutlineIcon],svg[teenyicons-section-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 .5H1.5a1 1 0 0 0-1 1V4M6 .5h3m2 0h2.5a1 1 0 0 1 1 1V4M.5 6v3m14-3v3m-14 2v2.5a1 1 0 0 0 1 1H4M14.5 11v2.5a1 1 0 0 1-1 1H11M7.5 4v7M4 7.5h7m-5 7h3"></svg:path>`,
})
export class TeenyiconsSectionAddOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSectionAddSolidIcon],svg[teenyicons-section-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H4v1H1.5a.5.5 0 0 0-.5.5V4H0zM9 1H6V0h3zm4.5 0H11V0h2.5A1.5 1.5 0 0 1 15 1.5V4h-1V1.5a.5.5 0 0 0-.5-.5M7 7V4h1v3h3v1H8v3H7V8H4V7zM0 9V6h1v3zm14 0V6h1v3zM0 13.5V11h1v2.5a.5.5 0 0 0 .5.5H4v1H1.5A1.5 1.5 0 0 1 0 13.5m14 0V11h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11v-1h2.5a.5.5 0 0 0 .5-.5M9 15H6v-1h3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSectionAddSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSectionRemoveOutlineIcon],svg[teenyicons-section-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 .5H1.5a1 1 0 0 0-1 1V4M6 .5h3m2 0h2.5a1 1 0 0 1 1 1V4M.5 6v3m14-3v3m-14 2v2.5a1 1 0 0 0 1 1H4M14.5 11v2.5a1 1 0 0 1-1 1H11m-7-7h7m-5 7h3"></svg:path>`,
})
export class TeenyiconsSectionRemoveOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSectionRemoveSolidIcon],svg[teenyicons-section-remove-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H4v1H1.5a.5.5 0 0 0-.5.5V4H0zM9 1H6V0h3zm4.5 0H11V0h2.5A1.5 1.5 0 0 1 15 1.5V4h-1V1.5a.5.5 0 0 0-.5-.5M0 9V6h1v3zm14 0V6h1v3zm-3-1H4V7h7zM0 13.5V11h1v2.5a.5.5 0 0 0 .5.5H4v1H1.5A1.5 1.5 0 0 1 0 13.5m14 0V11h1v2.5a1.5 1.5 0 0 1-1.5 1.5H11v-1h2.5a.5.5 0 0 0 .5-.5M9 15H6v-1h3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSectionRemoveSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendDownOutlineIcon],svg[teenyicons-send-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m7.5 13.5l-4-4m4 4l4-4m-4 4V3M14 1.5H1"></svg:path>`,
})
export class TeenyiconsSendDownOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendDownSolidIcon],svg[teenyicons-send-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h13v1H1zm7 2v9.293l3.146-3.147l.708.708L7.5 14.207L3.146 9.854l.708-.708L7 12.293V3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSendDownSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendLeftOutlineIcon],svg[teenyicons-send-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m1.5 7.5l4-4m-4 4l4 4m-4-4H12m1.5 6.5V1"></svg:path>`,
})
export class TeenyiconsSendLeftOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendLeftSolidIcon],svg[teenyicons-send-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 1h1v13h-1zM2.707 8l3.147 3.146l-.708.708L.793 7.5l4.353-4.354l.708.708L2.707 7H12v1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSendLeftSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendOutlineIcon],svg[teenyicons-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5.5l.46.197a.5.5 0 0 0-.657-.657zm-14 6l-.197-.46a.5.5 0 0 0-.06.889zm8 8l-.429.257a.5.5 0 0 0 .889-.06zM14.303.04l-14 6l.394.92l14-6zM.243 6.93l5 3l.514-.858l-5-3zM5.07 9.757l3 5l.858-.514l-3-5zm3.889 4.94l6-14l-.92-.394l-6 14zM14.146.147l-9 9l.708.707l9-9z"></svg:path>`,
})
export class TeenyiconsSendOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendRightOutlineIcon],svg[teenyicons-send-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m13.5 7.5l-4 4m4-4l-4-4m4 4H3M1.5 1v13"></svg:path>`,
})
export class TeenyiconsSendRightOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendRightSolidIcon],svg[teenyicons-send-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 14V1h1v13zM9.854 3.146L14.207 7.5l-4.353 4.354l-.708-.708L12.293 8H3V7h9.293L9.146 3.854z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSendRightSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendSolidIcon],svg[teenyicons-send-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.954.71a.5.5 0 0 1-.1.144L5.4 10.306l2.67 4.451a.5.5 0 0 0 .889-.06zM4.694 9.6L.243 6.928a.5.5 0 0 1 .06-.889L14.293.045a.5.5 0 0 0-.146.101z"></svg:path>`,
})
export class TeenyiconsSendSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendUpOutlineIcon],svg[teenyicons-send-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m7.5 1.5l4 4m-4-4l-4 4m4-4V12M1 13.5h13"></svg:path>`,
})
export class TeenyiconsSendUpOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSendUpSolidIcon],svg[teenyicons-send-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.5.793l4.354 4.353l-.708.708L8 2.707V12H7V2.707L3.854 5.854l-.708-.708zM14 13v1H1v-1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSendUpSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsServersOutlineIcon],svg[teenyicons-servers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 5.5h-12m12 0a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m12 0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1m-12-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m12 0h-12m12 0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m.5-6h3m-3 4h3m-3 4h3"></svg:path>`,
})
export class TeenyiconsServersOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsServersSolidIcon],svg[teenyicons-servers-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2.5A1.5 1.5 0 0 1 1.5 1h12A1.5 1.5 0 0 1 15 2.5v2c0 .384-.144.735-.382 1c.238.265.382.616.382 1v2c0 .384-.144.735-.382 1c.238.265.382.616.382 1v2a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-2c0-.384.144-.735.382-1A1.5 1.5 0 0 1 0 8.5v-2c0-.384.144-.735.382-1A1.5 1.5 0 0 1 0 4.5zM2 4h3V3H2zm3 4H2V7h3zm-3 4h3v-1H2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsServersSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShareOutlineIcon],svg[teenyicons-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="M4.5 7.5h4M11 4L8.5 7.495L11 11m3.5-8.501a2 2 0 0 1-4 0a2 2 0 0 1 4 0Zm0 9.993a2 2 0 0 1-4 0a2 2 0 0 1 4 0Zm-10-4.997a2 2 0 0 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class TeenyiconsShareOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShareSolidIcon],svg[teenyicons-share-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2.499a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-3.565 2.26L9.13 7.52l2.038 2.858A2.5 2.5 0 0 1 15 12.493a2.5 2.5 0 1 1-4.559-1.417L8.246 8H4.949A2.501 2.501 0 0 1 0 7.495A2.5 2.5 0 0 1 4.95 7h3.312l2.37-2.84A2.5 2.5 0 0 1 10 2.499"></svg:path>`,
})
export class TeenyiconsShareSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShieldOutlineIcon],svg[teenyicons-shield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 4.5l7-4l7 4v.72a9.65 9.65 0 0 1-7 9.28a9.65 9.65 0 0 1-7-9.28z"></svg:path>`,
})
export class TeenyiconsShieldOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShieldSolidIcon],svg[teenyicons-shield-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.748.066a.5.5 0 0 0-.496 0l-7 4A.5.5 0 0 0 0 4.5v.72a10.15 10.15 0 0 0 7.363 9.76a.5.5 0 0 0 .274 0A10.15 10.15 0 0 0 15 5.22V4.5a.5.5 0 0 0-.252-.434z"></svg:path>`,
})
export class TeenyiconsShieldSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShieldTickOutlineIcon],svg[teenyicons-shield-tick-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4 7.5L7 10l4-5M7.5.5l-7 4v.72a9.65 9.65 0 0 0 7 9.28a9.65 9.65 0 0 0 7-9.28V4.5z"></svg:path>`,
})
export class TeenyiconsShieldTickOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShieldTickSolidIcon],svg[teenyicons-shield-tick-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.252.066a.5.5 0 0 1 .496 0l7 4A.5.5 0 0 1 15 4.5v.72a10.15 10.15 0 0 1-7.363 9.76a.5.5 0 0 1-.274 0A10.15 10.15 0 0 1 0 5.22V4.5a.5.5 0 0 1 .252-.434zm-.18 10.645l4.318-5.399l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsShieldTickSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShieldXOutlineIcon],svg[teenyicons-shield-x-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m4.5 4.5l6 6m-6 0l6-6m-3-4l-7 4v.72a9.65 9.65 0 0 0 7 9.28a9.65 9.65 0 0 0 7-9.28V4.5z"></svg:path>`,
})
export class TeenyiconsShieldXOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShieldXSolidIcon],svg[teenyicons-shield-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.252.066a.5.5 0 0 1 .496 0l7 4A.5.5 0 0 1 15 4.5v.72a10.15 10.15 0 0 1-7.363 9.76a.5.5 0 0 1-.274 0A10.15 10.15 0 0 1 0 5.22V4.5a.5.5 0 0 1 .252-.434zm2.895 10.788L7.5 8.207l-2.646 2.647l-.708-.707L6.793 7.5L4.146 4.854l.708-.708L7.5 6.793l2.646-2.647l.708.708L8.207 7.5l2.647 2.646z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsShieldXSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShopOutlineIcon],svg[teenyicons-shop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2.5V2a.5.5 0 0 0-.49.402zm12 0l.49-.098A.5.5 0 0 0 13.5 2zm1 5V8a.5.5 0 0 0 .49-.598zm-14 0l-.49-.098A.5.5 0 0 0 .5 8zm3 3H3v.5h.5zm8 0v.5h.5v-.5zM0 15h15v-1H0zm1-7.5v7h1v-7zm12 0v7h1v-7zM1.5 3h12V2h-12zm11.51-.402l1 5l.98-.196l-1-5zM14.5 7H.5v1h14zM.99 7.598l1-5l-.98-.196l-1 5zM1 1h13V0H1zm2 6.5v3h1v-3zm.5 3.5h8v-1h-8zm8.5-.5v-3h-1v3z"></svg:path>`,
})
export class TeenyiconsShopOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShopSolidIcon],svg[teenyicons-shop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1H1V0h13zM1.01 2.402A.5.5 0 0 1 1.5 2h12a.5.5 0 0 1 .49.402l1 5A.5.5 0 0 1 14.5 8H.5a.5.5 0 0 1-.49-.598zM1 9v5H0v1h15v-1h-1V9h-2v2H3V9z"></svg:path><svg:path fill="currentColor" d="M4 9h7v1H4z"></svg:path>`,
})
export class TeenyiconsShopSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSignOutlineIcon],svg[teenyicons-sign-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6.5V6a.5.5 0 0 0-.5.5zm10 0h.5a.5.5 0 0 0-.5-.5zm0 6v.5a.5.5 0 0 0 .5-.5zm-10 0H4a.5.5 0 0 0 .5.5zM1 1v14h1V1zM0 4h15V3H0zm4.5 3h10V6h-10zm9.5-.5v6h1v-6zm.5 5.5h-10v1h10zm-9.5.5v-6H4v6zm1-9v3h1v-3zm6 0v3h1v-3z"></svg:path>`,
})
export class TeenyiconsSignOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSignSolidIcon],svg[teenyicons-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1v2H0v1h1v11h1V4h4v2H4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H13V4h2V3H2V1zm6 5V4h5v2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSignSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSigninOutlineIcon],svg[teenyicons-signin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m10.5 7.5l-3 3.25m3-3.25l-3-3m3 3H1m6-6h6.5v12H7"></svg:path>`,
})
export class TeenyiconsSigninOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSigninSolidIcon],svg[teenyicons-signin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1h7v13H7v-1h6V2H7zm.854 3.146l3.34 3.34l-3.327 3.603l-.734-.678L9.358 8H1V7h8.293L7.146 4.854z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSigninSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSimOutlineIcon],svg[teenyicons-sim-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5h3.5V12M4 8.5h2m-2 3h2m3-6h2m-2 3h2m-2 3h2m1.5 3h-10a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h7l4 4v9a1 1 0 0 1-1 1Z"></svg:path>`,
})
export class TeenyiconsSimOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSimSolidIcon],svg[teenyicons-sim-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.707 0H2.5A1.5 1.5 0 0 0 1 1.5v12A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V4.293zM7 6H4V5h4v7H7zM6 9H4V8h2zm-2 3h2v-1H4zm7-6H9V5h2zM9 9h2V8H9zm2 3H9v-1h2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSimSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSimohamedOutlineIcon],svg[teenyicons-simohamed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 5.5v3a6 6 0 0 1-1.2 3.6l-.6.8a4 4 0 0 1-6.4 0l-.6-.8a6 6 0 0 1-1.2-3.6v-3m10 0a5 5 0 0 0-10 0m10 0l-1.121-1.121A3 3 0 0 0 9.257 3.5H5.743a3 3 0 0 0-2.122.879L2.5 5.5m2.5 3h1m3 0h1m-4-2H2.5A1.562 1.562 0 0 0 .985 8.44l.151.605A1.92 1.92 0 0 0 3 10.5m6-4h3.5c1.016 0 1.761.955 1.515 1.94l-.151.605A1.92 1.92 0 0 1 12 10.5M3 11l.837.502a7 7 0 0 0 3.602.998h.122a7 7 0 0 0 3.602-.998L12 11m-6.5 1l1-1h2l1 1"></svg:path>`,
})
export class TeenyiconsSimohamedOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSimohamedSolidIcon],svg[teenyicons-simohamed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9H5V8h1zm4 0H9V8h1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.5a5.5 5.5 0 1 1 11 0v.56a2.063 2.063 0 0 1 1.5 2.502l-.151.604a2.42 2.42 0 0 1-1.825 1.777A6.5 6.5 0 0 1 11.7 12.4l-.6.8a4.5 4.5 0 0 1-7.2 0l-.6-.8a6.5 6.5 0 0 1-.823-1.457A2.42 2.42 0 0 1 .65 9.166L.5 8.562A2.063 2.063 0 0 1 2 6.06zM3 7h3V6H3v-.293l.975-.975A2.5 2.5 0 0 1 5.743 4h3.514a2.5 2.5 0 0 1 1.768.732l.975.975V6H9v1h3v1.5a5.5 5.5 0 0 1-.455 2.19l-.64.384q-.526.316-1.098.526l-1.1-1.1H6.293l-1.1 1.1a6.5 6.5 0 0 1-1.098-.526l-.64-.384A5.5 5.5 0 0 1 3 8.5zm-1 .124c-.411.22-.653.702-.53 1.195l.151.605c.078.309.253.573.488.762A6.5 6.5 0 0 1 2 8.5zm4.307 4.777Q6.865 12 7.439 12h.122q.573 0 1.133-.1l-.401-.4H6.707zm6.584-2.215c.235-.19.41-.453.488-.762l.15-.605A1.06 1.06 0 0 0 13 7.124V8.5q0 .601-.11 1.186" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSimohamedSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSkullOutlineIcon],svg[teenyicons-skull-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 11.5H4v-.309l-.276-.138zm-1.447-.724l.223-.447zm10.894 0l-.223-.447zM11.5 11.5l-.224-.447l-.276.138v.309zm-4-2l.354-.354a.5.5 0 0 0-.708 0zM2 9.882V6.5H1v3.382zM13 6.5v3.382h1V6.5zm-9.276 4.553l-1.448-.724l-.447.895l1.447.723zm9-.724l-1.448.724l.448.894l1.447-.723zM4 12.5v-1H3v1zm7-1v1h1v-1zM9.5 14h-4v1h4zm1.5-1.5A1.5 1.5 0 0 1 9.5 14v1a2.5 2.5 0 0 0 2.5-2.5zm2-2.618a.5.5 0 0 1-.276.447l.447.895A1.5 1.5 0 0 0 14 9.882zM7.5 1A5.5 5.5 0 0 1 13 6.5h1A6.5 6.5 0 0 0 7.5 0zM3 12.5A2.5 2.5 0 0 0 5.5 15v-1A1.5 1.5 0 0 1 4 12.5zm-1-6A5.5 5.5 0 0 1 7.5 1V0A6.5 6.5 0 0 0 1 6.5zM1 9.882a1.5 1.5 0 0 0 .83 1.342l.446-.895A.5.5 0 0 1 2 9.882zM4.5 8a.5.5 0 0 1-.5-.5H3A1.5 1.5 0 0 0 4.5 9zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 6 7.5zM4.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 4.5 6zm0-1A1.5 1.5 0 0 0 3 7.5h1a.5.5 0 0 1 .5-.5zm6 2a.5.5 0 0 1-.5-.5H9A1.5 1.5 0 0 0 10.5 9zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 12 7.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 10.5 6zm0-1A1.5 1.5 0 0 0 9 7.5h1a.5.5 0 0 1 .5-.5zm-3.646 4.854l1-1l-.708-.708l-1 1zm.292-1l1 1l.708-.708l-1-1z"></svg:path>`,
})
export class TeenyiconsSkullOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSkullSolidIcon],svg[teenyicons-skull-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m6 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 6.5a6.5 6.5 0 0 1 13 0v3.382a1.5 1.5 0 0 1-.83 1.342l-1.17.585v.691A2.5 2.5 0 0 1 9.5 15h-4A2.5 2.5 0 0 1 3 12.5v-.691l-1.17-.585A1.5 1.5 0 0 1 1 9.882zM4.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7.146 9.146a.5.5 0 0 1 .708 0l1 1l-.708.708l-.646-.647l-.646.647l-.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSkullSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSkypeOutlineIcon],svg[teenyicons-skype-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.83 8.34l-.496-.066a.5.5 0 0 0 .08.346zM6.66 1.17l-.28.415a.5.5 0 0 0 .344.081zM1.17 6.66l.496.065a.5.5 0 0 0-.08-.345zm7.17 7.17l.279-.415a.5.5 0 0 0-.345-.08zm5.985-5.423c.039-.29.066-.593.066-.907h-1c0 .257-.022.513-.057.774zm.066-.907A6.89 6.89 0 0 0 7.5.609v1A5.89 5.89 0 0 1 13.391 7.5zM7.5.609a7 7 0 0 0-.905.065l.129.992c.264-.034.52-.057.776-.057zm-.562.146A4.44 4.44 0 0 0 4.457 0v1c.712 0 1.374.216 1.923.585zM4.457 0A4.456 4.456 0 0 0 0 4.457h1A3.456 3.456 0 0 1 4.457 1zM0 4.457c0 .918.279 1.772.755 2.481l.83-.558A3.44 3.44 0 0 1 1 4.457zm.675 2.137a7 7 0 0 0-.066.906h1c0-.257.022-.513.057-.775zM.609 7.5A6.89 6.89 0 0 0 7.5 14.391v-1A5.89 5.89 0 0 1 1.609 7.5zM7.5 14.391c.314 0 .616-.027.906-.066l-.132-.99a6 6 0 0 1-.774.056zm.561-.146c.71.477 1.564.755 2.483.755v-1a3.44 3.44 0 0 1-1.925-.585zm2.483.755A4.457 4.457 0 0 0 15 10.544h-1A3.457 3.457 0 0 1 10.544 14zM15 10.544a4.44 4.44 0 0 0-.756-2.482l-.83.558c.37.55.586 1.21.586 1.924zM7 8h1V7H7zm2.947-2.724A2.31 2.31 0 0 0 7.882 4v1c.496 0 .949.28 1.17.724zM9 9a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2zM8 8a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2zm-.882 2c-.496 0-.95-.28-1.17-.724l-.895.448A2.31 2.31 0 0 0 7.118 11zM5 6a2 2 0 0 0 2 2V7a1 1 0 0 1-1-1zm1 0a1 1 0 0 1 1-1V4a2 2 0 0 0-2 2zm2 4h-.882v1H8zm-.118-6H7v1h.882z"></svg:path>`,
})
export class TeenyiconsSkypeOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSkypeSolidIcon],svg[teenyicons-skype-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.457A4.456 4.456 0 0 1 6.778.652A7 7 0 0 1 7.5.61a6.89 6.89 0 0 1 6.891 6.89q-.002.373-.043.723a4.457 4.457 0 0 1-6.126 6.125a7 7 0 0 1-.722.043A6.89 6.89 0 0 1 .609 7.5c0-.248.017-.49.043-.723A4.43 4.43 0 0 1 0 4.457M6 6a1 1 0 0 1 1-1h.882c.496 0 .949.28 1.17.724l.895-.448A2.31 2.31 0 0 0 7.882 4H7a2 2 0 1 0 0 4h1a1 1 0 0 1 0 2h-.882c-.496 0-.95-.28-1.17-.724l-.895.448A2.31 2.31 0 0 0 7.118 11H8a2 2 0 1 0 0-4H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSkypeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSlackOutlineIcon],svg[teenyicons-slack-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.5 7.5V6A1.5 1.5 0 1 1 12 7.5zm0 0h-3m3 0V2a1.5 1.5 0 1 0-3 0v5.5m0 0v-3m0 3H2a1.5 1.5 0 1 1 0-3h5.5m0 3H13a1.5 1.5 0 0 1 0 3H7.5m0-3v3m0-3h-3m3 0V13a1.5 1.5 0 0 1-3 0V7.5m3-3V3A1.5 1.5 0 1 0 6 4.5zm0 6H9A1.5 1.5 0 1 1 7.5 12zm-3-3V9A1.5 1.5 0 1 1 3 7.5z"></svg:path>`,
})
export class TeenyiconsSlackOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSlackSolidIcon],svg[teenyicons-slack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.385 6.923H8.077v-5.77a1.154 1.154 0 0 1 2.308 0zm2.307 0H11.54V5.77a1.154 1.154 0 1 1 1.153 1.154m1.153 1.153h-5.77v2.308h5.77a1.154 1.154 0 0 0 0-2.308m-5.769 4.615V11.54H9.23a1.154 1.154 0 1 1-1.154 1.153M1.154 4.615h5.77v2.308h-5.77a1.154 1.154 0 0 1 0-2.308m5.769-2.307v1.154H5.77a1.154 1.154 0 1 1 1.154-1.154M1.154 9.23c0-.636.516-1.153 1.154-1.153h1.154V9.23a1.154 1.154 0 0 1-2.308 0m3.461 4.616v-5.77h2.308v5.77a1.154 1.154 0 0 1-2.308 0"></svg:path>`,
})
export class TeenyiconsSlackSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSnapchatOutlineIcon],svg[teenyicons-snapchat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 1c-1.155 0-2.174.412-2.894 1.281c-.642.775-1.006 2.35-1.066 3.666l-.073.01l-.022.004a9 9 0 0 0-.368.059c-.465.089-1.346.326-1.543 1.277c-.093.445.011.833.247 1.134c.211.269.497.429.708.53q.135.062.274.117c-.21.584-.579 1.184-.987 1.728c-.382.508-.28 1.153-.083 1.573c.197.421.57.402 1.192.43c.352.015.722.051 1.09.12c.166.03.362.098.606.2q.213.09.423.187q.168.077.374.167c.573.25 1.276.517 2.056.517s1.483-.267 2.055-.517c.14-.06.26-.115.375-.167l.025-.012c.135-.06.26-.117.398-.174c.243-.103.44-.17.606-.201a8 8 0 0 1 1.09-.12c.622-.028 1.104-.009 1.303-.43c.197-.42.298-1.065-.084-1.573c-.406-.54-.772-1.136-.983-1.716a5 5 0 0 0 .305-.127c.216-.098.518-.261.73-.543c.245-.326.315-.739.175-1.184c-.28-.886-1.092-1.122-1.568-1.216a7 7 0 0 0-.355-.058l-.012-.002l-.056-.009c-.065-1.234-.41-2.795-1.036-3.581C9.695 1.485 8.682 1 7.5 1Z"></svg:path>`,
})
export class TeenyiconsSnapchatOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSnapchatSolidIcon],svg[teenyicons-snapchat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 0C6.249 0 5.144.476 4.365 1.479c-.696.893-1.09 2.712-1.155 4.23l-.08.012l-.022.003c-.117.018-.256.04-.4.068c-.504.103-1.458.376-1.672 1.474c-.1.513.013.961.268 1.308c.23.31.54.495.768.61q.146.075.296.137c-.228.673-.627 1.366-1.069 1.993c-.414.587-.304 1.33-.09 1.816c.213.486.617.464 1.291.495c.382.018.783.06 1.181.139c.18.035.393.114.657.232q.23.104.458.215c.123.06.254.123.405.193c.62.288 1.383.596 2.227.596c.845 0 1.607-.308 2.227-.596c.151-.07.282-.133.406-.193l.027-.014a17 17 0 0 1 .43-.201c.265-.118.477-.196.657-.232a8 8 0 0 1 1.18-.139c.675-.031 1.198-.01 1.413-.495c.213-.485.323-1.229-.09-1.816c-.44-.623-.837-1.31-1.066-1.98a5 5 0 0 0 .33-.146c.234-.113.562-.301.79-.626c.267-.377.342-.853.19-1.366c-.302-1.023-1.182-1.295-1.697-1.403a6 6 0 0 0-.385-.068l-.014-.002l-.06-.01c-.07-1.424-.443-3.225-1.123-4.132C9.878.56 8.78 0 7.5 0"></svg:path>`,
})
export class TeenyiconsSnapchatSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSnesOutlineIcon],svg[teenyicons-snes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 7v3M2 8.5h3m6 0h1m-1-2h1m-3 2h1m-1-2h1m-8.5-3h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z"></svg:path>`,
})
export class TeenyiconsSnesOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSnesSolidIcon],svg[teenyicons-snes-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h12A1.5 1.5 0 0 1 15 4.5v6a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 10.5zM12 7h-1V6h1zm-9 3V9H2V8h1V7h1v1h1v1H4v1zm8-1h1V8h-1zM9 9h1V8H9zm1-2H9V6h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSnesSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSortAlphabeticallyOutlineIcon],svg[teenyicons-sort-alphabetically-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 14.5l-.354.354a.5.5 0 0 0 .708 0zm6-6V8H9v.5zm0 6H9v.5h.5zm-5.646.354l3-3l-.708-.708l-3 3zm0-.708l-3-3l-.708.708l3 3zM3 0v14.5h1V0zm6.5 9H12V8H9.5zm2.5 2H9.5v1H12zm-2 .5v-3H9v3zm3-1.5a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2zm-1-1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2zm0 5H9.5v1H12zm-2 .5v-3H9v3zm3-1.5a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2zm-1-1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2zm-2-5V2.5H9V7zm3-4.5V7h1V2.5zM11.5 1A1.5 1.5 0 0 1 13 2.5h1A2.5 2.5 0 0 0 11.5 0zM10 2.5A1.5 1.5 0 0 1 11.5 1V0A2.5 2.5 0 0 0 9 2.5zM9.5 5h4V4h-4z"></svg:path>`,
})
export class TeenyiconsSortAlphabeticallyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSortAlphabeticallySolidIcon],svg[teenyicons-sort-alphabetically-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 13.293V0h1v13.293l2.146-2.147l.708.708l-3 3a.5.5 0 0 1-.708 0l-3-3l.708-.708zM11.5 1A1.5 1.5 0 0 0 10 2.5V4h3V2.5A1.5 1.5 0 0 0 11.5 1M13 5v2h1V2.5a2.5 2.5 0 0 0-5 0V7h1V5zM9 8h3a2 2 0 0 1 1.323 3.5A2 2 0 0 1 12 15H9zm3 3a1 1 0 1 0 0-2h-2v2zm-2 1h2a1 1 0 1 1 0 2h-2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSortAlphabeticallySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSortDownOutlineIcon],svg[teenyicons-sort-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 14.5l-.354.354a.5.5 0 0 0 .708 0zm.354.354l3-3l-.708-.708l-3 3zm0-.708l-3-3l-.708.708l3 3zM3 0v14.5h1V0zm6 4h6V3H9zm0 4h4V7H9zm0 4h2v-1H9z"></svg:path>`,
})
export class TeenyiconsSortDownOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSortDownSolidIcon],svg[teenyicons-sort-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 13.293V0h1v13.293l2.146-2.147l.708.708l-3 3a.5.5 0 0 1-.708 0l-3-3l.708-.708zM15 4H9V3h6zm-2 4H9V7h4zm-2 4H9v-1h2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSortDownSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
